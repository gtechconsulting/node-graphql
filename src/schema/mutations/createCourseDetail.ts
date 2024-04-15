import { GraphQLNonNull } from 'graphql';
import Context from '../../context/Context';
import { default as courseType } from '../types/courseDetail';
import newCourseDetail from '../types/inputs/newCourseDetail';

const create = {
  type: courseType,
  args: {
    input: {
      type: new GraphQLNonNull(newCourseDetail),
    },
  },
  resolve: (_, { input }, context: Context): Promise<any> => {

    return context.repositories.courseDetail.create(input)
  },
};

export default create;
