
import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

const newGameType = new GraphQLInputObjectType({
  name: 'newGameType',
  fields: {
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    active: {
      type: new GraphQLNonNull(GraphQLString),
    },

  },
});

export default newGameType;
