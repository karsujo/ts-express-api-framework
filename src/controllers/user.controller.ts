import {Request, Response} from "express";
import IUser from "interfaces/user.interface";
import UserRepository from "repositories/user.repository"

export default class UserController 
{
    private _userRepository; 

    constructor()
    {
        this._userRepository = new UserRepository(); 
    }

    public async getAllUsers(req:Request, res:Response){
        //add an error handling middleware layer
        try{
            const users:IUser[] = await this._userRepository.getAllUsers();
            return res.status(200).json(users)
        }
        catch (error) {
            return res.status(500).json({ error: 'Error fetching users' });
          }
    }
    
}
