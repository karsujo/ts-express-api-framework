import express,{Request, Response,NextFunction, Application} from 'express'

const app:Application = express();

app.get('/', (req : Request, res: Response,next: NextFunction)=>{
    res.send("Data")
})
app.listen(3030, ()=> console.log("listening"))