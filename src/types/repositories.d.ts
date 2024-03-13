declare namespace AuditLogRepository {

  interface CreateParameters {
    log: string;
  }
  interface FindParameters {
    first: number;
    after?: number;
    log?: number;
    query?: string;
  }

  interface CountParameters {
    log?: number;
    query?: string;
  }
}

interface AuditLogRepository {
  get(id: number): Promise<AuditLog>;

  create(params: AuditLogRepository.CreateParameters): Promise<AuditLog>;

  find(params: AuditLogRepository.FindParameters): Promise<AuditLog[]>;

  count(params: AuditLogRepository.CountParameters): Promise<number>;
}
