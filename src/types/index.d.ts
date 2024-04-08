
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
  actice: boolean;
  created_at: string;
  updated_at: string;
}
