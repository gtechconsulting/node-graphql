import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { formatDate } from '../../utils/functions';

const gameResult = new GraphQLObjectType({
  name: 'gameResult',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Globally unique ID of the game result',
      resolve: (obj: GameResult): string => {
        return Buffer.from(`game-result-${obj.id}`).toString('base64');
      },
    },
    _id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Database ID of the game result',
      resolve: (obj: GameResult): number => {
        return obj.id;
      },
    },
    game_id: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: GameResult): number => {
        return obj.game_id;
      },
    },
    score: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: GameResult): number => {
        return obj.score;
      },
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: GameResult): string => {
        return formatDate(new Date(obj.created_at));
      },
    },

  }),
});

export default gameResult;
