import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import booking from '../booking';

const edge = new GraphQLObjectType({
  name: 'bookingEdge',
  description: 'List of edges.',
  fields: {
    node: {
      description: 'The item at the end of the edge.',
      type: booking,
    },
    cursor: {
      description: 'A cursor for pagination.',
      type: GraphQLString,
    },
  },
});

export default edge;
