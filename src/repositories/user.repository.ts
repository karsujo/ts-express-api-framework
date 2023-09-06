import IUser from "interfaces/user.interface"
import sql from "../utils/db.util"


 const getAllUsers = async():Promise<IUser[]> => {
    const users  = await sql<IUser[]>`
    select * from usr.Users
    `
    return users
}


const UserRepository = {
    getAllUsers

}

export default UserRepository; 