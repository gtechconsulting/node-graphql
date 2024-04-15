import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { formatDate } from '../../utils/functions';

const obj = new GraphQLObjectType({
  name: 'course',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Globally unique ID of the game result',
      resolve: (obj: Course): string => {
        return Buffer.from(`game-result-${obj.id}`).toString('base64');
      },
    },
    _id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Database ID of the game result',
      resolve: (obj: Course): number => {
        return obj.id;
      },
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Course): string => {
        return obj.name;
      },
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Course): string => {
        return obj.description;
      },
    },
    club_id: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Course): number => {
        return obj.club_id;
      },
    },
    course_type: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Course): string => {
        return obj.course_type;
      },
    },
    active: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Course): boolean => {
        return obj.active;
      },
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Course): string => {
        return formatDate(new Date(obj.created_at));
      },
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Course): string => {
        return formatDate(new Date(obj.updated_at));
      },
    },
  }),
});

export default obj;
