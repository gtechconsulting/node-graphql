
import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

const newCourseDetail = new GraphQLInputObjectType({
  name: 'newCourse',
  fields: {
    course_id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    data: {
      type: new GraphQLNonNull(GraphQLString),
    },
    registration_fee: {
      type: new GraphQLNonNull(GraphQLString),
    },
    registgration_type: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

export default newCourseDetail;
