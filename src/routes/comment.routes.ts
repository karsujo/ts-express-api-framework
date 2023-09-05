import Router from "express"
import {Request,Response,NextFunction} from "express"
const route = Router();

route.get('/comments', (req : Request, res:Response, next:NextFunction)=>{
       res.send("Comment[]"); 
})

export default route; 