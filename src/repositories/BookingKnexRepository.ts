import database from '../database';
import {GraphQLError} from 'graphql';
import throwCustomError, { ErrorTypes } from '../helpers/error-handler.helper';

export default class BookingKnexRepository implements BookingRepository {

  public async get(id: number): Promise<Booking> {
    return database.select()
      .from('booking')
      .where('id', id)
      .first();
  }

  public async getLast(): Promise<Booking> {
    return database.select()
    .from('booking')
    .orderBy('id', 'desc')
    .first();
  }

  public async getMany(ids: number[]): Promise<Booking[]> {
    return database.select()
      .from('booking')
      .whereIn('id', ids);
  }

  public async find(params: BookingRepository.FindParameters): Promise<Booking[]> {
    const { first, after, query } = params;

    return database.select()
      .from('booking')
      .modify((queryBuilder) => {
        if (typeof after !== 'undefined' && after !== null) {
          queryBuilder.offset(after);
        }

        if (typeof query !== 'undefined' && query !== null) {
          queryBuilder.where('user_id', 'like', `%${query}%`);
        }
      })
      .limit(first);
  }

  public async count(params: BookingRepository.CountParameters): Promise<number> {
    const { query } = params;

    return database.count({ count: '*' })
      .from('booking')
      .modify((queryBuilder) => {

        if (typeof query !== 'undefined' && query !== null) {
          queryBuilder.where('user_id', 'like', `%${query}%`);
        }
      })
      .first()
      .then(result => result.count);
  }

  public async existBooking(params: BookingRepository.ExistParameters): Promise<boolean> {
    const { user_id, course_id } = params;

    return database.count({ count: '*' })
      .from('booking')
      .where('user_id', user_id)
      .orWhere('course_id', course_id)
      .first()
      .then(result => result.count > 0);
  }

  public async create(params: BookingRepository.CreateParameters): Promise<Booking> {

    const exist = await this.existBooking(params);

    if(exist) {
      throwCustomError(
          'Booking already registered.',
          ErrorTypes.ALREADY_EXISTS
        );
    } else {
      return database.insert({
        user_id: params.user_id,
        course_id: params.course_id,
        payment_status: params.payment_status
      })
      .into('booking')
      .then(result => {
        return this.getLast();
      });
    }
  }
}
