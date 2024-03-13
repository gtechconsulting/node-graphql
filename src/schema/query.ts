import { GraphQLObjectType } from 'graphql';
import auditLog from './queries/auditLog';
import auditLogs from './queries/auditLogs';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: (): any => ({
    auditLog,
    auditLogs,
  }),
});

export default query;
