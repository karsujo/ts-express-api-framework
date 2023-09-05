import commentRouter from "./comment.routes"
import { Application } from "express"

function setupRoutes(app : Application)
{
          console.log('setting up routes ... '); 
          app.use(commentRouter)
}

export default setupRoutes;