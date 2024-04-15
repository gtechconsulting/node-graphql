import database from '../database';
import {GraphQLError} from 'graphql';
import throwCustomError, { ErrorTypes } from '../helpers/error-handler.helper';

export default class GameKnexRepository implements GameRepository {

  public async get(id: number): Promise<Game> {
    return database.select()
      .from('game')
      .where('id', id)
      .first();
  }

  public async getLast(): Promise<Game> {
    return database.select()
    .from('game')
    .orderBy('id', 'desc')
    .first();
  }

  public async getMany(ids: number[]): Promise<Game[]> {
    return database.select()
      .from('game')
      .whereIn('id', ids);
  }

  public async find(params: GameRepository.FindParameters): Promise<Game[]> {
    const { first, after, query } = params;

    return database.select()
      .from('game')
      .modify((queryBuilder) => {
        if (typeof after !== 'undefined' && after !== null) {
          queryBuilder.offset(after);
        }

        if (typeof query !== 'undefined' && query !== null) {
          queryBuilder.where('name', 'like', `%${query}%`);
        }
      })
      .limit(first);
  }

  public async count(params: GameRepository.CountParameters): Promise<number> {
    const { query } = params;

    return database.count({ count: '*' })
      .from('game')
      .modify((queryBuilder) => {

        if (typeof query !== 'undefined' && query !== null) {
          queryBuilder.where('name', 'like', `%${query}%`);
        }
      })
      .first()
      .then(result => result.count);
  }

  public async existGame(params: GameRepository.ExistParameters): Promise<boolean> {
    const { name, club_id } = params;

    return database.count({ count: '*' })
      .from('game')
      .where('name', name)
      .orWhere('club_id', club_id)
      .first()
      .then(result => result.count > 0);
  }

  public async create(params: GameRepository.CreateParameters): Promise<Game> {

    const exist = await this.existGame(params);

    if(exist) {
      throwCustomError(
          'Game already registered with this name/email.',
          ErrorTypes.ALREADY_EXISTS
        );
    } else {
      return database.insert({
        name: params.name,
        description: params.description,
        user_id: params.user_id,
        course_id: params.course_id,
        club_id: params.club_id,
        game_type_id: params.game_type_id,
        max_players: params.max_players,
        game_status: params.game_status,
      })
      .into('game')
      .then(result => {
        return this.getLast();
      });
    }
  }
}
