import { User } from "../../domain/models/User";

export const getUserTokenFromStorage = (): User => {
  return JSON.parse(localStorage.getItem("user")!);
};
