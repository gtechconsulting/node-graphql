import database from '../database';
import {GraphQLError} from 'graphql';
import throwCustomError, { ErrorTypes } from '../helpers/error-handler.helper';

export default class UserKnexRepository implements UserRepository {

  public async get(id: number): Promise<User> {
    return database.select()
      .from('user')
      .where('id', id)
      .first();
  }

  public async getLast(): Promise<User> {
    return database.select()
    .from('user')
    .orderBy('id', 'desc')
    .first();
  }

  public async getMany(ids: number[]): Promise<User[]> {
    return database.select()
      .from('user')
      .whereIn('id', ids);
  }

  public async find(params: UserRepository.FindParameters): Promise<User[]> {
    const { first, after, query } = params;

    return database.select()
      .from('user')
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

  public async count(params: UserRepository.CountParameters): Promise<number> {
    const { query } = params;

    return database.count({ count: '*' })
      .from('user')
      .modify((queryBuilder) => {

        if (typeof query !== 'undefined' && query !== null) {
          queryBuilder.where('name', 'like', `%${query}%`);
        }
      })
      .first()
      .then(result => result.count);
  }

  public async existUser(params: UserRepository.ExistParameters): Promise<boolean> {
    const { username, email } = params;

    return database.count({ count: '*' })
      .from('user')
      .where('username', username)
      .orWhere('email', email)
      .first()
      .then(result => result.count > 0);
  }

  public async create(params: UserRepository.CreateParameters): Promise<User> {

    const isUserExixts = await this.existUser(params);

    if(isUserExixts) {
      throwCustomError(
          'User already registered with this username/email.',
          ErrorTypes.ALREADY_EXISTS
        );
    } else {
      return database.insert({
        username: params.username,
        name: params.name,
        email: params.email,
        password: params.password,
        date_of_birth: params.date_of_birth,
        gender: params.gender
      })
      .into('user')
      .then(result => {
        return this.getLast();
      });
    }
  }
}
