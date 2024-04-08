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

declare namespace UserRepository {

  interface CreateParameters {
    username: string;
    email: string;
    password: string;
    name: string;
    date_of_birth: string;
    gender: string;
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

  interface ExistParameters {
    username: string;
    email: string;
  }


}

interface UserRepository {
  get(id: number): Promise<User>;

  create(params: UserRepository.CreateParameters): Promise<User>;

  find(params: UserRepository.FindParameters): Promise<User[]>;

  count(params: UserRepository.CountParameters): Promise<number>;

  existUser(params: UserRepository.ExistParameters): Promise<boolean>;
}
