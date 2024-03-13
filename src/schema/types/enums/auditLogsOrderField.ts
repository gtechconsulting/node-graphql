import { GraphQLEnumType } from 'graphql';

export default new GraphQLEnumType({
  name: 'auditLogsOrderField',
  values: {
    ID: {
      value: 'id',
    },
    CREATED_AT: {
      value: 'createdAt',
    },
  },
});
