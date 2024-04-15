import { GraphQLNonNull } from 'graphql';
import Context from '../../context/Context';
import { default as bookingType } from '../types/booking';
import newBooking from '../types/inputs/newBooking';

const createBooking = {
  type: bookingType,
  args: {
    input: {
      type: new GraphQLNonNull(newBooking),
    },
  },
  resolve: (_, { input }, context: Context): Promise<any> => {

    return context.repositories.booking.create(input)
  },
};

export default createBooking;
