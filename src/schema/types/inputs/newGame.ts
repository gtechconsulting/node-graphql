
import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

const newGame = new GraphQLInputObjectType({
  name: 'newGame',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    user_id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    course_id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    club_id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    game_type_id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    max_players: {
      type: new GraphQLNonNull(GraphQLString),
    },
    game_status: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

export default newGame;
