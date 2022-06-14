import { User } from "../../../domain/models/User";
import { IAuthService, UserCredentials, UserIdToken } from "../interfaces/IAuthService";
import { IHttpService } from "../interfaces/IHttpService";

export default class AuthService implements IAuthService {
  httpService: IHttpService;

  constructor(httpService: IHttpService) {
    this.httpService = httpService;
  }

  async registerUser(userCredentials: UserCredentials): Promise<User> {
    const data: User = await this.httpService.post({
      url: "/api/users/register",
      options: userCredentials,
    });

    return data;
  }

  async signIn(userCredentials: UserCredentials): Promise<User> {
    const data: User = await this.httpService.post({
      url: "/api/users/login",
      options: userCredentials,
    });
    return data;
  }

  async getUserDetails(user: UserIdToken): Promise<User> {
    const data: User = await this.httpService.post({
      url: `/api/users/${user.id}`,
      options: user,
    });

    return data;
  }

  signOut(): null {
    return null;
  }
}
