import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { formatDate } from '../../utils/functions';

const user = new GraphQLObjectType({
  name: 'user',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Globally unique ID of the audit log',
      resolve: (obj: User): string => {
        return Buffer.from(`user-${obj.id}`).toString('base64');
      },
    },
    _id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Database ID of the user',
      resolve: (obj: User): number => {
        return obj.id;
      },
    },
    username: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: User): string => {
        return obj.username;
      },
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: User): string => {
        return obj.email;
      },
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: User): string => {
        return obj.password;
      },
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: User): string => {
        return obj.name;
      },
    },
    dateOfBirth: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: User): string => {
        return obj.date_of_birth;
      },
    },
    gender: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: User): string => {
        return obj.gender;
      },
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: User): string => {
        return formatDate(new Date(obj.created_at));
      },
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: User): string => {
        return formatDate(new Date(obj.updated_at));
      },
    },
  }),
});

export default user;
