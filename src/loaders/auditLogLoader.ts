import DataLoader from 'dataloader';
import AuditLogRepository from '../repositories/AuditLogKnexRepository';

async function getLogsById(ids: number[]): Promise<AuditLog[]> {
  const auditLogRepository = new AuditLogRepository();
  const auditLogs = await auditLogRepository.getMany(ids);
  return ids.map((id) => {
    return auditLogs.find((auditLog) => auditLog.id === id);
  });
}

export default new DataLoader(getLogsById);
