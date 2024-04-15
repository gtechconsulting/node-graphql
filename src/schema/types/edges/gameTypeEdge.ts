import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import gameType from '../gameType';

const edge = new GraphQLObjectType({
  name: 'gameTypeEdge',
  description: 'List of edges.',
  fields: {
    node: {
      description: 'The item at the end of the edge.',
      type: gameType,
    },
    cursor: {
      description: 'A cursor for pagination.',
      type: GraphQLString,
    },
  },
});

export default edge;
