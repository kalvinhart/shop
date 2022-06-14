import { User } from "../../../domain/models/User";

export type UserCredentials = {
  email: string;
  password: string;
};

export type UserIdToken = {
  id: string;
  token: string;
};

export interface IAuthService {
  registerUser: (userCredentials: UserCredentials) => Promise<User>;
  signIn: (userCredentials: UserCredentials) => Promise<User>;
  getUserDetails: (user: UserIdToken) => Promise<User>;
  signOut: () => null;
}
