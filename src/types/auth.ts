export interface LoginUserInput {
  email: string;
  password: string;
}

export interface LoginUserResponse {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  created: string;
  isVerified: boolean;
  jwtToken: string;
}
