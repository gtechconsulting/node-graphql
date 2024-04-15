import database from '../database';
import {GraphQLError} from 'graphql';
import throwCustomError, { ErrorTypes } from '../helpers/error-handler.helper';

export default class CourseDetailKnexRepository implements CourseDetailRepository {

  public async get(id: number): Promise<CourseDetail> {
    return database.select()
      .from('course_detail')
      .where('id', id)
      .first();
  }

  public async getLast(): Promise<CourseDetail> {
    return database.select()
    .from('course_detail')
    .orderBy('id', 'desc')
    .first();
  }

  public async getMany(ids: number[]): Promise<CourseDetail[]> {
    return database.select()
      .from('course_detail')
      .whereIn('id', ids);
  }

  public async find(params: CourseDetailRepository.FindParameters): Promise<CourseDetail[]> {
    const { first, after, query } = params;

    return database.select()
      .from('course_detail')
      .modify((queryBuilder) => {
        if (typeof after !== 'undefined' && after !== null) {
          queryBuilder.offset(after);
        }

        if (typeof query !== 'undefined' && query !== null) {
          queryBuilder.where('course_id', 'like', `%${query}%`);
        }
      })
      .limit(first);
  }

  public async count(params: CourseDetailRepository.CountParameters): Promise<number> {
    const { query } = params;

    return database.count({ count: '*' })
      .from('course_detail')
      .modify((queryBuilder) => {

        if (typeof query !== 'undefined' && query !== null) {
          queryBuilder.where('course_id', 'like', `%${query}%`);
        }
      })
      .first()
      .then(result => result.count);
  }

  public async existCourseDetail(params: CourseDetailRepository.ExistParameters): Promise<boolean> {
    const { course_id } = params;

    return database.count({ count: '*' })
      .from('course_detail')
      .where('course_id', course_id)
      .first()
      .then(result => result.count > 0);
  }

  public async create(params: CourseDetailRepository.CreateParameters): Promise<CourseDetail> {

    const exist = await this.existCourseDetail(params);

    if(exist) {
      throwCustomError(
          'CourseDetail already registered.',
          ErrorTypes.ALREADY_EXISTS
        );
    } else {
      return database.insert({
        course_id: params.course_id,
        data: params.data,
        registration_fee: params.registration_fee,
        registration_type: params.registration_type,
      })
      .into('course_detail')
      .then(result => {
        return this.getLast();
      });
    }
  }
}
