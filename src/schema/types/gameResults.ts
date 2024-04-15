import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { formatDate } from '../../utils/functions';

const gameType = new GraphQLObjectType({
  name: 'gameType',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Globally unique ID of the game result',
      resolve: (obj: GameType): string => {
        return Buffer.from(`game-type-${obj.id}`).toString('base64');
      },
    },
    _id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Database ID of the game result',
      resolve: (obj: GameType): number => {
        return obj.id;
      },
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: GameType): string => {
        return obj.description;
      },
    },
    active: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: GameType): boolean => {
        return obj.active;
      },
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: GameType): string => {
        return formatDate(new Date(obj.created_at));
      },
    },

  }),
});

export default gameType;
