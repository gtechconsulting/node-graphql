import { GraphQLObjectType } from 'graphql';
import auditLog from './queries/auditLog';
import auditLogs from './queries/auditLogs';
import users from './queries/users';
import clubs from './queries/clubs';
import games from './queries/games';
import gameResults from './queries/gameResults';
import gameTypes from './queries/gameTypes';
import bookings from './queries/bookings';
import courses from './queries/courses';
import courseDetails from './queries/courseDetails';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: (): any => ({
    auditLog,
    auditLogs,
    users,
    clubs,
    games,
    gameResults,
    gameTypes,
    bookings,
    courses,
    courseDetails
  }),
});

export default query;
