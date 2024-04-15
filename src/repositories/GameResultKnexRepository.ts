import database from '../database';
import {GraphQLError} from 'graphql';
import throwCustomError, { ErrorTypes } from '../helpers/error-handler.helper';

export default class GameResultKnexRepository implements GameResultRepository {

  public async get(id: number): Promise<GameResult> {
    return database.select()
      .from('game_results')
      .where('id', id)
      .first();
  }

  public async getLast(): Promise<GameResult> {
    return database.select()
    .from('game_results')
    .orderBy('id', 'desc')
    .first();
  }

  public async getMany(ids: number[]): Promise<GameResult[]> {
    return database.select()
      .from('game_results')
      .whereIn('id', ids);
  }

  public async find(params: GameResultRepository.FindParameters): Promise<GameResult[]> {
    const { first, after, query } = params;

    return database.select()
      .from('game_results')
      .modify((queryBuilder) => {
        if (typeof after !== 'undefined' && after !== null) {
          queryBuilder.offset(after);
        }

        if (typeof query !== 'undefined' && query !== null) {
          queryBuilder.where('game_id', 'like', `%${query}%`);
        }
      })
      .limit(first);
  }

  public async count(params: GameResultRepository.CountParameters): Promise<number> {
    const { query } = params;

    return database.count({ count: '*' })
      .from('game_results')
      .modify((queryBuilder) => {

        if (typeof query !== 'undefined' && query !== null) {
          queryBuilder.where('game_id', 'like', `%${query}%`);
        }
      })
      .first()
      .then(result => result.count);
  }

  public async existResult(params: GameResultRepository.ExistParameters): Promise<boolean> {
    const { game_id } = params;

    return database.count({ count: '*' })
      .from('game_results')
      .where('game_id', game_id)
      .first()
      .then(result => result.count > 0);
  }

  public async create(params: GameResultRepository.CreateParameters): Promise<GameResult> {

    const exist = await this.existResult(params);

    if(exist) {
      throwCustomError(
          'GameResult already registered with this name/email.',
          ErrorTypes.ALREADY_EXISTS
        );
    } else {
      return database.insert({
        game_id: params.game_id,
        score: params.score,
      })
      .into('game_results')
      .then(result => {
        return this.getLast();
      });
    }
  }
}
