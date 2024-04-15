import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { formatDate } from '../../utils/functions';

const game = new GraphQLObjectType({
  name: 'game',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Globally unique ID of the game',
      resolve: (obj: Game): string => {
        return Buffer.from(`game-${obj.id}`).toString('base64');
      },
    },
    _id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Database ID of the game',
      resolve: (obj: Game): number => {
        return obj.id;
      },
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Game): string => {
        return obj.name;
      },
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Game): string => {
        return obj.description;
      },
    },
    user_id: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Game): number => {
        return obj.user_id;
      },
    },
    course_id: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Game): number => {
        return obj.course_id;
      },
    },
    club: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Game): number => {
        return obj.club_id;
      },
    },
    game_type: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Game): number => {
        return obj.game_type_id;
      },
    },
    max_players: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Game): number => {
        return obj.max_players;
      },
    },
    game_status: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Game): string => {
        return obj.game_status;
      },
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Game): string => {
        return formatDate(new Date(obj.created_at));
      },
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Game): string => {
        return formatDate(new Date(obj.updated_at));
      },
    },
  }),
});

export default game;
