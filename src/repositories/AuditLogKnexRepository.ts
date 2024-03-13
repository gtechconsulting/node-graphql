import database from '../database';

export default class AuditLogKnexRepository implements AuditLogRepository {

  public async get(id: number): Promise<AuditLog> {
    return database.select()
      .from('audit_log')
      .where('id', id)
      .first();
  }

  public async getMany(ids: number[]): Promise<AuditLog[]> {
    return database.select()
      .from('audit_log')
      .whereIn('id', ids);
  }

  public async find(params: AuditLogRepository.FindParameters): Promise<AuditLog[]> {
    const { first, after, query } = params;

    return database.select()
      .from('audit_log')
      .modify((queryBuilder) => {
        if (typeof after !== 'undefined' && after !== null) {
          queryBuilder.offset(after);
        }

        if (typeof query !== 'undefined' && query !== null) {
          queryBuilder.where('log', 'like', `%${query}%`);
        }
      })
      .limit(first);
  }

  public async count(params: AuditLogRepository.CountParameters): Promise<number> {
    const { query } = params;

    return database.count({ count: '*' })
      .from('audit_log')
      .modify((queryBuilder) => {

        if (typeof query !== 'undefined' && query !== null) {
          queryBuilder.where('log', 'like', `%${query}%`);
        }
      })
      .first()
      .then(result => result.count);
  }

  public async create(params: AuditLogRepository.CreateParameters): Promise<AuditLog> {
    return database.insert({
      log: params.log,
    })
    .into('audit_log')
    .then(ids => {
      return this.get(ids[0]);
    });
  }
}
