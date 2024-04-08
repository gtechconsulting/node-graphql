import Context from './Context';
import AuditLogRepository from '../repositories/AuditLogKnexRepository';
import UserRepository from '../repositories/UserKnexRepository';
import auditLogLoader from '../loaders/auditLogLoader';

const context: Context = {
  repositories: {
    auditLog: new AuditLogRepository(),
    user: new UserRepository(),
  },
  loaders: {
    auditLog: auditLogLoader,
  }
};

export default context;
