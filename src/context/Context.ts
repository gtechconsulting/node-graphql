import DataLoader from 'dataloader';

interface RepositoriesContext {
  auditLog: AuditLogRepository;
  user: UserRepository;
}

interface LoadersContext {
  auditLog: DataLoader<number, AuditLog>;
}

export default interface Context {
  repositories: RepositoriesContext;
  loaders: LoadersContext;
}
