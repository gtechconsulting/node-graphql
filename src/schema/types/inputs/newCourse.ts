
import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

const newCourse = new GraphQLInputObjectType({
  name: 'newCourse',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    club_id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    course_type: {
      type: new GraphQLNonNull(GraphQLString),
    },
    active: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

export default newCourse;
