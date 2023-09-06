import Router from "express"
import {Request,Response} from "express"

const route = Router();

route.get('/users', (req : Request, res:Response)=>{
       res.send("Comment[]"); 
})

route.get('/users/:id', (req : Request, res:Response)=>{
    res.send("Comment[]"); 
})

export default route; 