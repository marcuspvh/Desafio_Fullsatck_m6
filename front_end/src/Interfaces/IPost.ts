import { IUser } from "./IUser";

export interface IPost {
  user: IUser;
  accessToken: string;
};