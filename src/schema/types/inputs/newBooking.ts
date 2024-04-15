
import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

const newBooking = new GraphQLInputObjectType({
  name: 'newBooking',
  fields: {
    user_id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    course_id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    payment_status: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

export default newBooking;
