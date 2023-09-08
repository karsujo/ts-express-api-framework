import IUser from "interfaces/user.interface";
export default class UserModel implements IUser {
   id: number;
   username: string;
   firstname: string;
   lastname: string;
   email: string;
   password: string;
   created_on: Date;

   constructor(
      id: number,
      username: string,
      firstname: string,
      lastname: string,
      email: string,
      password: string,
      created_on: Date,
   ) {
      this.id = id;
      this.username = username;
      this.firstname = firstname;
      this.lastname = lastname;
      this.email = email;
      this.password = password;
      this.created_on = created_on;
   }
}
