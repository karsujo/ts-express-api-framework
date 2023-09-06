import Router from "express"
import {Request,Response,NextFunction} from "express"

const route = Router();

route.get('/comments', (req : Request, res:Response)=>{
       res.send("Comment[]"); 
})


route.get('/comments/:id', (req : Request, res:Response)=>{
       res.send("Comment[]"); 
})

export default route; 