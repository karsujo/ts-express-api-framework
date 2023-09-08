import IUser from "./user.interface";

export default interface IUserRepository {
   getAllUsers(): Promise<IUser[]>;
}
