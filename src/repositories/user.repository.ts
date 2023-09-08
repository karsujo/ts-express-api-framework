import IUser from "interfaces/user.interface";
import sql from "../infrastructure/db";
import IUserRepository from "interfaces/user.repository.interface";

export default class UserRepository implements IUserRepository {
   async getAllUsers(): Promise<IUser[]> {
      const users = await sql<IUser[]>`
        select * from usr.Users
        `;
      return users;
   }
}
