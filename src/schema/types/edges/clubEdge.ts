import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import club from '../club';

const clubEdge = new GraphQLObjectType({
  name: 'clubEdge',
  description: 'List of edges.',
  fields: {
    node: {
      description: 'The item at the end of the edge.',
      type: club,
    },
    cursor: {
      description: 'A cursor for pagination.',
      type: GraphQLString,
    },
  },
});

export default clubEdge;
