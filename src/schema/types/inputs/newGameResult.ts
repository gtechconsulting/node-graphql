
import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

const newGameResult = new GraphQLInputObjectType({
  name: 'newGameResult',
  fields: {
    game_id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    score: {
      type: new GraphQLNonNull(GraphQLString),
    },

  },
});

export default newGameResult;
