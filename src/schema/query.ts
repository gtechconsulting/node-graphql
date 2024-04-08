import { GraphQLObjectType } from 'graphql';
import auditLog from './queries/auditLog';
import auditLogs from './queries/auditLogs';
import users from './queries/users';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: (): any => ({
    auditLog,
    auditLogs,
    users
  }),
});

export default query;
