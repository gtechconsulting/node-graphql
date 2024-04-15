import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

const newClub = new GraphQLInputObjectType({
  name: 'newClub',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    street: {
      type: new GraphQLNonNull(GraphQLString),
    },
    neighborhood: {
      type: new GraphQLNonNull(GraphQLString),
    },
    number: {
      type: new GraphQLNonNull(GraphQLString),
    },
    date_of_birth: {
      type: new GraphQLNonNull(GraphQLString),
    },
    reference_point: {
      type: new GraphQLNonNull(GraphQLString),
    },
    city: {
      type: new GraphQLNonNull(GraphQLString),
    },
    state: {
      type: new GraphQLNonNull(GraphQLString),
    },
    postal_code: {
      type: new GraphQLNonNull(GraphQLString),
    },
    phone_number: {
      type: new GraphQLNonNull(GraphQLString),
    },
    fax: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    website: {
      type: new GraphQLNonNull(GraphQLString),
    },
    social_media_url: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

export default newClub;
