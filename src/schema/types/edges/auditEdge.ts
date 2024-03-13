import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import auditLog from '../auditLog';

const auditEdge = new GraphQLObjectType({
  name: 'auditEdge',
  description: 'List of edges.',
  fields: {
    node: {
      description: 'The item at the end of the edge.',
      type: auditLog,
    },
    cursor: {
      description: 'A cursor for pagination.',
      type: GraphQLString,
    },
  },
});

export default auditEdge;
