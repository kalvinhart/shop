import { User } from "../../../domain/models/User";
import { IAuthService, UserCredentials, UserIdToken } from "../interfaces/IAuthService";
import { IHttpService, WishlistData } from "../interfaces/IHttpService";

export default class AuthService implements IAuthService {
  httpService: IHttpService;

  constructor(httpService: IHttpService) {
    this.httpService = httpService;
  }

  async registerUser(userCredentials: UserCredentials): Promise<User> {
    const response: User = await this.httpService.post({
      url: "/api/users/register",
      data: userCredentials,
    });

    return response;
  }

  async signIn(userCredentials: UserCredentials): Promise<User> {
    const response: User = await this.httpService.post({
      url: "/api/users/login",
      data: userCredentials,
    });
    return response;
  }

  async getUserDetails(user: UserIdToken): Promise<User> {
    const response: User = await this.httpService.post({
      url: `/api/users/${user.id}`,
      data: user,
      options: {
        headers: {
          Authorization: user.token,
        },
      },
    });

    return response;
  }

  signOut(): null {
    return null;
  }

  async saveToWishlist(data: WishlistData): Promise<void> {
    await this.httpService.post<void>({
      url: `/api/wishlist`,
      data,
      options: {
        headers: {
          Authorization: data.token,
        },
      },
    });
  }

  async removeFromWishlist(data: WishlistData): Promise<void> {
    await this.httpService.post<void>({
      url: `/api/wishlist/remove`,
      data,
      options: {
        headers: {
          Authorization: data.token,
        },
      },
    });
  }
}
