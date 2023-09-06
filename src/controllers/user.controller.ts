import {Request, Response} from "express";
import IUser from "interfaces/user.interface";
import UserRepository from "repositories/user.repository"

const getAllUsers = async(req:Request, res:Response)=> {
    const users:IUser[] = await UserRepository.getAllUsers();
    return res.status(200).json(users)
}


const UserController = {
    getAllUsers
}

export default UserController;