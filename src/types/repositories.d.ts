declare namespace AuditLogRepository {

  interface CreateParameters {
    log: string;
  }
  interface FindParameters {
    first: number;
    after?: number;
    log?: number;
    query?: string;
  }

  interface CountParameters {
    log?: number;
    query?: string;
  }
}

interface AuditLogRepository {
  get(id: number): Promise<AuditLog>;

  create(params: AuditLogRepository.CreateParameters): Promise<AuditLog>;

  find(params: AuditLogRepository.FindParameters): Promise<AuditLog[]>;

  count(params: AuditLogRepository.CountParameters): Promise<number>;
}

declare namespace UserRepository {

  interface CreateParameters {
    username: string;
    email: string;
    password: string;
    name: string;
    date_of_birth: string;
    gender: string;
  }
  interface FindParameters {
    first: number;
    after?: number;
    log?: number;
    query?: string;
  }

  interface CountParameters {
    log?: number;
    query?: string;
  }

  interface ExistParameters {
    username: string;
    email: string;
  }


}

interface UserRepository {
  get(id: number): Promise<User>;

  create(params: UserRepository.CreateParameters): Promise<User>;

  find(params: UserRepository.FindParameters): Promise<User[]>;

  count(params: UserRepository.CountParameters): Promise<number>;

  existUser(params: UserRepository.ExistParameters): Promise<boolean>;
}

//CLUB REPOSITORY
declare namespace ClubRepository {

  interface CreateParameters {
    name: string;
    street: string;
    neighborhood: string;
    number: string;
    reference_point: string;
    city: string;
    state: string;
    postal_code: string;
    phone_number: string;
    fax: string;
    email: string;
    website: string;
    social_media_url: string;
  }

  interface FindParameters {
    first: number;
    after?: number;
    log?: number;
    query?: string;
  }

  interface CountParameters {
    log?: number;
    query?: string;
  }

  interface ExistParameters {
    name: string;
    email: string;
  }
}

interface ClubRepository {
  get(id: number): Promise<Club>;

  create(params: ClubRepository.CreateParameters): Promise<Club>;

  find(params: ClubRepository.FindParameters): Promise<Club[]>;

  count(params: ClubRepository.CountParameters): Promise<number>;

  existClub(params: ClubRepository.ExistParameters): Promise<boolean>;
}


//GAME REPOSITORY
declare namespace GameRepository {

  interface CreateParameters {
    name: string;
    description: string;
    user_id: number;
    course_id: number;
    club_id: number;
    game_type_id: number;
    max_players: number;
    game_status: string;
  }

  interface FindParameters {
    first: number;
    after?: number;
    log?: number;
    query?: string;
  }

  interface CountParameters {
    log?: number;
    query?: string;
  }

  interface ExistParameters {
    name: string;
    club_id: number;
  }
}

interface GameRepository {
  get(id: number): Promise<Game>;

  create(params: GameRepository.CreateParameters): Promise<Game>;

  find(params: GameRepository.FindParameters): Promise<Game[]>;

  count(params: GameRepository.CountParameters): Promise<number>;

  existGame(params: GameRepository.ExistParameters): Promise<boolean>;
}


//GAME RESULT REPOSITORY
declare namespace GameResultRepository {

  interface CreateParameters {
    game_id: number;
    score: number;
  }

  interface FindParameters {
    first: number;
    after?: number;
    log?: number;
    query?: string;
  }

  interface CountParameters {
    log?: number;
    query?: string;
  }

  interface ExistParameters {
    game_id: number;
  }
}

interface GameResultRepository {
  get(id: number): Promise<GameResult>;

  create(params: GameResultRepository.CreateParameters): Promise<GameResult>;

  find(params: GameResultRepository.FindParameters): Promise<GameResult[]>;

  count(params: GameResultRepository.CountParameters): Promise<number>;

  existResult(params: GameResultRepository.ExistParameters): Promise<boolean>;
}


//GAME TYPE REPOSITORY
declare namespace GameTypeRepository {

  interface CreateParameters {
    description: string;
    active: boolean;
  }

  interface FindParameters {
    first: number;
    after?: number;
    log?: number;
    query?: string;
  }

  interface CountParameters {
    log?: number;
    query?: string;
  }

  interface ExistParameters {
    description: string;
  }
}

interface GameTypeRepository {
  get(id: number): Promise<GameType>;

  create(params: GameTypeRepository.CreateParameters): Promise<GameType>;

  find(params: GameTypeRepository.FindParameters): Promise<GameType[]>;

  count(params: GameTypeRepository.CountParameters): Promise<number>;

  existGameType(params: GameTypeRepository.ExistParameters): Promise<boolean>;
}



//BOOKING REPOSITORY
declare namespace BookingRepository {

  interface CreateParameters {
    user_id: number;
    course_id: number;
    payment_status: string;
  }

  interface FindParameters {
    first: number;
    after?: number;
    log?: number;
    query?: string;
  }

  interface CountParameters {
    log?: number;
    query?: string;
  }

  interface ExistParameters {
    user_id: number;
    course_id: number;
  }
}

interface BookingRepository {
  get(id: number): Promise<Booking>;

  create(params: BookingRepository.CreateParameters): Promise<Booking>;

  find(params: BookingRepository.FindParameters): Promise<Booking[]>;

  count(params: BookingRepository.CountParameters): Promise<number>;

  existBooking(params: BookingRepository.ExistParameters): Promise<boolean>;
}



//COURSE REPOSITORY
declare namespace CourseRepository {

  interface CreateParameters {
    name: string;
    description: string;
    club_id: number;
    course_type: string;
    active: boolean;
  }

  interface FindParameters {
    first: number;
    after?: number;
    log?: number;
    query?: string;
  }

  interface CountParameters {
    log?: number;
    query?: string;
  }

  interface ExistParameters {
    club_id: number;
    course_type: string;
  }
}

interface CourseRepository {
  get(id: number): Promise<Course>;

  create(params: CourseRepository.CreateParameters): Promise<Course>;

  find(params: CourseRepository.FindParameters): Promise<Course[]>;

  count(params: CourseRepository.CountParameters): Promise<number>;

  existCourse(params: CourseRepository.ExistParameters): Promise<boolean>;
}



//COURSE DETAIL REPOSITORY
declare namespace CourseDetailRepository {

  interface CreateParameters {
    course_id: number;
    data: string;
    club_id: number;
    registration_fee: string;
    registration_type: string;
  }

  interface FindParameters {
    first: number;
    after?: number;
    log?: number;
    query?: string;
  }

  interface CountParameters {
    log?: number;
    query?: string;
  }

  interface ExistParameters {
    course_id: number;
  }
}

interface CourseDetailRepository {
  get(id: number): Promise<CourseDetail>;

  create(params: CourseDetailRepository.CreateParameters): Promise<CourseDetail>;

  find(params: CourseDetailRepository.FindParameters): Promise<CourseDetail[]>;

  count(params: CourseDetailRepository.CountParameters): Promise<number>;

  existCourseDetail(params: CourseDetailRepository.ExistParameters): Promise<boolean>;
}
