import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import game from '../game';

const edge = new GraphQLObjectType({
  name: 'gameEdge',
  description: 'List of edges.',
  fields: {
    node: {
      description: 'The item at the end of the edge.',
      type: game,
    },
    cursor: {
      description: 'A cursor for pagination.',
      type: GraphQLString,
    },
  },
});

export default edge;
