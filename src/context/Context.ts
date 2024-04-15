import DataLoader from 'dataloader';

interface RepositoriesContext {
  auditLog: AuditLogRepository;
  user: UserRepository;
  club: ClubRepository;
  game: GameRepository;
  gameResult: GameResultRepository;
  gameType: GameTypeRepository;
  booking: BookingRepository;
  course: CourseRepository;
  courseDetail: CourseDetailRepository;
}

interface LoadersContext {
  auditLog: DataLoader<number, AuditLog>;
}

export default interface Context {
  repositories: RepositoriesContext;
  loaders: LoadersContext;
}
