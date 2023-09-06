import commentRouter from "./comment.routes"
import userRouter from "./user.routes"
import { Application } from "express"
import logger from "../utils/logger.util";


function setupRoutes(app : Application)
{
          console.log('setting up routes ... '); 

          app.use("/api/v1", commentRouter)
          app.use("/api/v1", userRouter)


          logger.debug("route setup complete")

}

export default setupRoutes;