import Context from './Context';
import AuditLogRepository from '../repositories/AuditLogKnexRepository';
import auditLogLoader from '../loaders/auditLogLoader';

const context: Context = {
  repositories: {
    auditLog: new AuditLogRepository(),
  },
  loaders: {
    auditLog: auditLogLoader,
  }
};

export default context;
