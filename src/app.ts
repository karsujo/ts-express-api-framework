import express, { Request, Response, NextFunction, Application, json } from "express";
import compression from "compression";
import { config as configureDotEnv } from "dotenv";
import setupRoutes from "./routes";
import cacheController from "express-cache-controller";

const app: Application = express();
//Configure env variables
configureDotEnv();

app.use(json());
app.use(compression());

// Middleware to set caching headers (server-side caching)
app.use(
   cacheController({
      // Across clients
      public: true,
      // (1 min)
      maxAge: 60,
   }),
);

//setup routers
setupRoutes(app);

export default app;
