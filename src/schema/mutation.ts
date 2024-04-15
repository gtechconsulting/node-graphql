import { GraphQLObjectType } from 'graphql';
import createLog from './mutations/createLog';
import createUser from './mutations/createUser';
import createClub from './mutations/createClub';
import createGame from './mutations/createGame';
import createGameResult from './mutations/createGameResult';
import createGameType from './mutations/createGameType';
import createBooking from './mutations/createBooking';
import createCourse from './mutations/createCourse';
import createCourseDetail from './mutations/createCourseDetail';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: (): any => ({
    createLog,
    createUser,
    createClub,
    createGame,
    createGameResult,
    createGameType,
    createBooking,
    createCourse,
    createCourseDetail,
  }),
});

export default mutation;
