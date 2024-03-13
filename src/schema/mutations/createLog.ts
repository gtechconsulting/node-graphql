import { GraphQLNonNull } from 'graphql';
import Context from '../../context/Context';
import { default as auditLogType } from '../types/auditLog';
import newAuditLog from '../types/inputs/newAuditLog';

const createAuditLog = {
  type: auditLogType,
  args: {
    input: {
      type: new GraphQLNonNull(newAuditLog),
    },
  },
  resolve: (_, { input }, context: Context): Promise<any> => {
    return context.repositories.auditLog.create(input)
  },
};

export default createAuditLog;
