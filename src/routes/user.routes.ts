import Router from 'express';
import { Request, Response } from 'express';
import UserController from '../controllers/user.controller';

const route = Router();

const userController = new UserController();

route.get('/users', userController.getAllUsers);

route.get('/users/:id', (req: Request, res: Response) => {
   //TODO
});

export default route;
