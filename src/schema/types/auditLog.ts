import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { formatDate } from '../../utils/functions';

const auditLog = new GraphQLObjectType({
  name: 'AuditLog',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Globally unique ID of the audit log',
      resolve: (obj: AuditLog): string => {
        return Buffer.from(`audit_log-${obj.id}`).toString('base64');
      },
    },
    _id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Database ID of the audit log',
      resolve: (obj: AuditLog): number => {
        return obj.id;
      },
    },
    log: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: AuditLog): string => {
        return obj.log;
      },
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: AuditLog): string => {
        return formatDate(new Date(obj.createdAt));
      },
    },
  }),
});

export default auditLog;
