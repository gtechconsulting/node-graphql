import Context from './Context';
import AuditLogRepository from '../repositories/AuditLogKnexRepository';
import UserRepository from '../repositories/UserKnexRepository';
import ClubRepository from '../repositories/ClubKnexRepository';
import GameRepository from '../repositories/GameKnexRepository';
import GameResultRepository from '../repositories/GameResultKnexRepository';
import GameTypeRepository from '../repositories/GameTypeKnexRepository';
import BookingRepository from '../repositories/BookingKnexRepository';
import CourseRepository from '../repositories/CourseKnexRepository';
import CourseDetailRepository from '../repositories/CourseDetailKnexRepository';
import auditLogLoader from '../loaders/auditLogLoader';

const context: Context = {
  repositories: {
    auditLog: new AuditLogRepository(),
    user: new UserRepository(),
    club: new ClubRepository(),
    game: new GameRepository(),
    gameResult: new GameResultRepository(),
    gameType: new GameTypeRepository(),
    booking: new BookingRepository(),
    course: new CourseRepository(), 
    courseDetail: new CourseDetailRepository(),
  },
  loaders: {
    auditLog: auditLogLoader,
  }
};

export default context;
