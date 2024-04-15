import database from '../database';
import {GraphQLError} from 'graphql';
import throwCustomError, { ErrorTypes } from '../helpers/error-handler.helper';

export default class CourseKnexRepository implements CourseRepository {

  public async get(id: number): Promise<Course> {
    return database.select()
      .from('course')
      .where('id', id)
      .first();
  }

  public async getLast(): Promise<Course> {
    return database.select()
    .from('course')
    .orderBy('id', 'desc')
    .first();
  }

  public async getMany(ids: number[]): Promise<Course[]> {
    return database.select()
      .from('course')
      .whereIn('id', ids);
  }

  public async find(params: CourseRepository.FindParameters): Promise<Course[]> {
    const { first, after, query } = params;

    return database.select()
      .from('course')
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

  public async count(params: CourseRepository.CountParameters): Promise<number> {
    const { query } = params;

    return database.count({ count: '*' })
      .from('course')
      .modify((queryBuilder) => {

        if (typeof query !== 'undefined' && query !== null) {
          queryBuilder.where('name', 'like', `%${query}%`);
        }
      })
      .first()
      .then(result => result.count);
  }

  public async existCourse(params: CourseRepository.ExistParameters): Promise<boolean> {
    const { club_id, course_type } = params;

    return database.count({ count: '*' })
      .from('course')
      .where('club_id', club_id)
      .orWhere('course_type', course_type)
      .first()
      .then(result => result.count > 0);
  }

  public async create(params: CourseRepository.CreateParameters): Promise<Course> {

    const exist = await this.existCourse(params);

    if(exist) {
      throwCustomError(
          'Course already registered.',
          ErrorTypes.ALREADY_EXISTS
        );
    } else {
      return database.insert({
        name: params.name,
        description: params.description,
        club_id: params.club_id,
        course_type: params.course_type,
        active: params.active
      })
      .into('course')
      .then(result => {
        return this.getLast();
      });
    }
  }
}
