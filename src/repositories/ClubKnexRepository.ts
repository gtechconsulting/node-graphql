import database from '../database';
import {GraphQLError} from 'graphql';
import throwCustomError, { ErrorTypes } from '../helpers/error-handler.helper';

export default class ClubKnexRepository implements ClubRepository {

  public async get(id: number): Promise<Club> {
    return database.select()
      .from('club')
      .where('id', id)
      .first();
  }

  public async getLast(): Promise<Club> {
    return database.select()
    .from('club')
    .orderBy('id', 'desc')
    .first();
  }

  public async getMany(ids: number[]): Promise<Club[]> {
    return database.select()
      .from('club')
      .whereIn('id', ids);
  }

  public async find(params: ClubRepository.FindParameters): Promise<Club[]> {
    const { first, after, query } = params;

    return database.select()
      .from('club')
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

  public async count(params: ClubRepository.CountParameters): Promise<number> {
    const { query } = params;

    return database.count({ count: '*' })
      .from('club')
      .modify((queryBuilder) => {

        if (typeof query !== 'undefined' && query !== null) {
          queryBuilder.where('name', 'like', `%${query}%`);
        }
      })
      .first()
      .then(result => result.count);
  }

  public async existClub(params: ClubRepository.ExistParameters): Promise<boolean> {
    const { name, email } = params;

    return database.count({ count: '*' })
      .from('club')
      .where('name', name)
      .orWhere('email', email)
      .first()
      .then(result => result.count > 0);
  }

  public async create(params: ClubRepository.CreateParameters): Promise<Club> {

    const exist = await this.existClub(params);

    if(exist) {
      throwCustomError(
          'Club already registered with this name/email.',
          ErrorTypes.ALREADY_EXISTS
        );
    } else {
      return database.insert({
        name: params.name,
        street: params.street,
        neighborhood: params.neighborhood,
        number: params.number,
        reference_point: params.reference_point,
        city: params.city,
        state: params.state,
        postal_code: params.postal_code,
        phone_number: params.phone_number,
        fax: params.fax,
        email: params.email,
        website: params.website,
        social_media_url: params.social_media_url,
      })
      .into('club')
      .then(result => {
        return this.getLast();
      });
    }
  }
}
