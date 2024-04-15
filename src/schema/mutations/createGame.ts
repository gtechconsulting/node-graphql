import { GraphQLNonNull } from 'graphql';
import Context from '../../context/Context';
import { default as gameType } from '../types/game';
import newGame from '../types/inputs/newGame';

const createGame = {
  type: gameType,
  args: {
    input: {
      type: new GraphQLNonNull(newGame),
    },
  },
  resolve: (_, { input }, context: Context): Promise<any> => {

    return context.repositories.game.create(input)
  },
};

export default createGame;
