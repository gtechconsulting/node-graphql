import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { formatDate } from '../../utils/functions';

const obj = new GraphQLObjectType({
  name: 'course Detail',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Globally unique ID of the game result',
      resolve: (obj: CourseDetail): string => {
        return Buffer.from(`game-result-${obj.id}`).toString('base64');
      },
    },
    _id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Database ID of the game result',
      resolve: (obj: CourseDetail): number => {
        return obj.id;
      },
    },
    course_id: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: CourseDetail): number => {
        return obj.course_id;
      },
    },
    data: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: CourseDetail): string => {
        return obj.data;
      },
    },
    registration_fee: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: CourseDetail): string => {
        return obj.registration_fee;
      },
    },
    registration_type: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: CourseDetail): string => {
        return obj.registration_type;
      },
    },
  }),
});

export default obj;
