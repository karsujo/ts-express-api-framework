import userRouter from "./user.routes";
import { Application } from "express";
import logger from "../infrastructure/logger";
import ApiLogMiddlewareInvoker from "src/middlewares/apilog.middleware";

function setupRoutes(app: Application) {
   console.log("setting up routes ... ");
   /**
    * Middleware to log API requests.
    * Logs all API Requests and Responses to the api_log table
    */
   app.use(ApiLogMiddlewareInvoker("logAPI"));

   app.use("/api/v1", userRouter);

   logger.debug("route setup complete");
}

export default setupRoutes;
