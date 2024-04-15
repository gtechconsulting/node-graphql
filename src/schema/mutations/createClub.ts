import { GraphQLNonNull } from 'graphql';
import Context from '../../context/Context';
import { default as clubType } from '../types/club';
import newClub from '../types/inputs/newClub';

const createClub = {
  type: clubType,
  args: {
    input: {
      type: new GraphQLNonNull(newClub),
    },
  },
  resolve: (_, { input }, context: Context): Promise<any> => {

    return context.repositories.club.create(input)
  },
};

export default createClub;
