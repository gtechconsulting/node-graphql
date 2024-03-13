import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

const newAuditLog = new GraphQLInputObjectType({
  name: 'newAuditLog',
  fields: {
    log: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

export default newAuditLog;
