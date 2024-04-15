
type AuditLog = {
  id: number;
  log: string;
  created_at: Date;
}

type OrderBy = {
  field: string;
  direction: string;
}

type User = {
  id: number;
  username: string;
  email: string;
  password: string;
  name: string;
  date_of_birth: string;
  gender: string;
  active: boolean;
  created_at: string;
  updated_at: string;
}

type UserActivity = {
  user_id: number;
  activity_id: number;
  created_at: string;
}

type Activity = {
  id: number;
  description: string;
  image_url: string;
  created_at: string;
}

type UserAchievement = {
  user_id: number;
  achievement_id: number;
  created_at: string;
}

type Achievement = {
  id: number;
  description: string;
  image_url: string;
  created_at: string;
}


type Club = {
  id: number;
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
  created_at: string;
  updated_at: string;
}

type ClubLocation = {
  id: number;
  club_id: number;
  latitude: string;
  longitude: string;
  created_at: string;
}

type ClubContact = {
  id: number;
  name: string;
  title: string;
  club_id: number;
  phone_number: string;
  email: string;
  active: boolean;
  created_at: string;
  updated_at: string;
}

type ClubEvent = {
  id: number;
  title: string;
  description: string;
  club_id: number;
  start_date: string;
  start_time: string;
  end_date: string;
  end_time: string;
  detail: string;
  active: boolean;
  created_at: string;
  updated_at: string;
}


type Game = {
  id: number;
  name: string;
  description: string;
  user_id: number;
  course_id: number;
  club_id: number;
  game_type_id: number;
  max_players: number;
  game_status: string;
  created_at: string;
  updated_at: string;
}

type GameResult = {
  id: number;
  game_id: number;
  score: number;
  created_at: string;
}

type GameType = {
  id: number;
  description: string;
  active: boolean;
  created_at: string;
}

type Booking = {
  id: number;
  user_id: number;
  course_id: number;
  payment_status: string;
  created_at: string;
}

type Course = {
  id: number;
  name: string;
  description: string;
  club_id: number;
  course_type: string;
  active: boolean;
  created_at: string;
  updated_at: string;
}

type CourseDetail = {
  id: number;
  course_id: number;
  data: string;
  registration_fee: string;
  registration_type: string;
}
