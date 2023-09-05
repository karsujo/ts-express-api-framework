import commentRouter from "./comment.routes"
import { Application } from "express"
import logger from "../utils/logger";
function setupRoutes(app : Application)
{
          console.log('setting up routes ... '); 

          app.use(commentRouter)

          logger.debug("route setup complete")

}

export default setupRoutes;