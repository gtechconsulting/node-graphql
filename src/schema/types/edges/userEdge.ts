import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import user from '../user';

const userEdge = new GraphQLObjectType({
  name: 'userEdge',
  description: 'List of edges.',
  fields: {
    node: {
      description: 'The item at the end of the edge.',
      type: user,
    },
    cursor: {
      description: 'A cursor for pagination.',
      type: GraphQLString,
    },
  },
});

export default userEdge;
