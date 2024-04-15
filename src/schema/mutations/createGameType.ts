import { GraphQLNonNull } from 'graphql';
import Context from '../../context/Context';
import { default as gameType } from '../types/gameType';
import newGameResult from '../types/inputs/newGameResult';

const createGameResult = {
  type: gameType,
  args: {
    input: {
      type: new GraphQLNonNull(newGameResult),
    },
  },
  resolve: (_, { input }, context: Context): Promise<any> => {

    return context.repositories.gameResult.create(input)
  },
};

export default createGameResult;
