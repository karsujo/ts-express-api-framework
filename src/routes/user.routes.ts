import Router from "express";
import { Request, Response } from "express";
import UserController from "../controllers/user.controller";

const route = Router();

const userController = new UserController();
/**
 * @openapi
 * '/api/v1/users':
 *   get:
 *     tags:
 *     - Get Users
 *     summary: Get all users
 *     description: Successful response
 *     responses:
 *       '200':
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
route.get("/users", userController.getAllUsers);

/**
 * @openapi
 * '/api/v1/comment':
 *   get:
 *     tags:
 *     - Get Comments
 *     summary: Get all comment records
 *     description: Successful response
 *     responses:
 *       '200':
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
route.get("/users/:id", (req: Request, res: Response) => {
   //TODO
});

export default route;
