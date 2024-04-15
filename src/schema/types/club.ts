import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { formatDate } from '../../utils/functions';

const club = new GraphQLObjectType({
  name: 'club',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Globally unique ID of the club',
      resolve: (obj: Club): string => {
        return Buffer.from(`club-${obj.id}`).toString('base64');
      },
    },
    _id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Database ID of the club',
      resolve: (obj: Club): number => {
        return obj.id;
      },
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Club): string => {
        return obj.name;
      },
    },
    street: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Club): string => {
        return obj.street;
      },
    },
    neighborhood: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Club): string => {
        return obj.neighborhood;
      },
    },
    number: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Club): string => {
        return obj.number;
      },
    },
    reference_point: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Club): string => {
        return obj.reference_point;
      },
    },
    city: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Club): string => {
        return obj.city;
      },
    },
    state: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Club): string => {
        return obj.state;
      },
    },
    postal_code: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Club): string => {
        return obj.postal_code;
      },
    },
    phone_number: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Club): string => {
        return obj.phone_number;
      },
    },
    fax: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Club): string => {
        return obj.fax;
      },
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Club): string => {
        return obj.email;
      },
    },
    website: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Club): string => {
        return obj.website;
      },
    },
    social_media_url: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Club): string => {
        return obj.social_media_url;
      },
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Club): string => {
        return formatDate(new Date(obj.created_at));
      },
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj: Club): string => {
        return formatDate(new Date(obj.updated_at));
      },
    },
  }),
});

export default club;
