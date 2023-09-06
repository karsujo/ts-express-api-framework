import IUser from "interfaces/user.interface"
import sql from "../infrastructure/db"

export default class UserRepository{

    async getAllUsers():Promise<IUser[]> {
        const users  = await sql<IUser[]>`
        select * from usr.Users
        `
        return users
    }
}
