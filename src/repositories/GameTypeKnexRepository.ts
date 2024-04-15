import database from '../database';
import {GraphQLError} from 'graphql';
import throwCustomError, { ErrorTypes } from '../helpers/error-handler.helper';

export default class GameTypeKnexRepository implements GameTypeRepository {

  public async get(id: number): Promise<GameType> {
    return database.select()
      .from('game_type')
      .where('id', id)
      .first();
  }

  public async getLast(): Promise<GameType> {
    return database.select()
    .from('game_type')
    .orderBy('id', 'desc')
    .first();
  }

  public async getMany(ids: number[]): Promise<GameType[]> {
    return database.select()
      .from('game_type')
      .whereIn('id', ids);
  }

  public async find(params: GameTypeRepository.FindParameters): Promise<GameType[]> {
    const { first, after, query } = params;

    return database.select()
      .from('game_type')
      .modify((queryBuilder) => {
        if (typeof after !== 'undefined' && after !== null) {
          queryBuilder.offset(after);
        }

        if (typeof query !== 'undefined' && query !== null) {
          queryBuilder.where('description', 'like', `%${query}%`);
        }
      })
      .limit(first);
  }

  public async count(params: GameTypeRepository.CountParameters): Promise<number> {
    const { query } = params;

    return database.count({ count: '*' })
      .from('game_type')
      .modify((queryBuilder) => {

        if (typeof query !== 'undefined' && query !== null) {
          queryBuilder.where('description', 'like', `%${query}%`);
        }
      })
      .first()
      .then(result => result.count);
  }

  public async existGameType(params: GameTypeRepository.ExistParameters): Promise<boolean> {
    const { description } = params;

    return database.count({ count: '*' })
      .from('game_type')
      .where('description', description)
      .first()
      .then(result => result.count > 0);
  }

  public async create(params: GameTypeRepository.CreateParameters): Promise<GameType> {

    const exist = await this.existGameType(params);

    if(exist) {
      throwCustomError(
          'GameType already registered with this description.',
          ErrorTypes.ALREADY_EXISTS
        );
    } else {
      return database.insert({
        description: params.description,
        active: params.active,
      })
      .into('game_type')
      .then(result => {
        return this.getLast();
      });
    }
  }
}
