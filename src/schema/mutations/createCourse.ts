import { GraphQLNonNull } from 'graphql';
import Context from '../../context/Context';
import { default as courseType } from '../types/course';
import newCourse from '../types/inputs/newCourse';

const createCourse = {
  type: courseType,
  args: {
    input: {
      type: new GraphQLNonNull(newCourse),
    },
  },
  resolve: (_, { input }, context: Context): Promise<any> => {

    return context.repositories.course.create(input)
  },
};

export default createCourse;
