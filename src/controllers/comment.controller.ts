import {Request, Response} from "express";
import { IComment } from "interfaces/comment.interface";

/**
 * get comments
 * @route GET /comments
 */
export const getCommentsPage = async(req: Request, res:Response<IComment[]>) => {
  
}