import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { formatDate } from '../../utils/functions';

const obj = new GraphQLObjectType({
  name: 'booking',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Globally unique ID of the game result',
      resolve: (obj: Booking): string => {
        return Buffer.from(`game-result-${obj.id}`).toString('base64');
      },
    },
    _id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Database ID of the game result',
      resolve: (obj: Booking): number => {
        return obj.id;
      },
    },
    user_id: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Booking): number => {
        return obj.user_id;
      },
    },
    course_id: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Booking): number => {
        return obj.course_id;
      },
    },
    payment_status: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Booking): string => {
        return obj.payment_status;
      },
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Booking): string => {
        return formatDate(new Date(obj.created_at));
      },
    },

  }),
});

export default obj;
