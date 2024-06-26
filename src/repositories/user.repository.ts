import IUser from "../interfaces/user.interface";
import RepositoryBase from "./base.repository";
import { RowDataPacket } from "mysql2";

export interface UserRow extends IUser, RowDataPacket{}
export default class UserRepository extends RepositoryBase {
   async getAllUsers(): Promise<IUser[]> {
      const users = await this.executeQuery<UserRow>("select * from Users");
      return users;
   }
}
