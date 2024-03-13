import { GraphQLID, GraphQLNonNull } from 'graphql';
import Context from '../../context/Context';
import { default as auditLogType } from '../types/auditLog';

const auditLog = {
  type: auditLogType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (_, { id }, context: Context) => {
    return context.repositories.auditLog.get(id);
  },
};

export default auditLog;
