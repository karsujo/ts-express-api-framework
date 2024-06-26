import express, { Request, Response, NextFunction, Application, json } from "express";
import compression from "compression";
import { config as configureDotEnv } from "dotenv";
import setupRoutes from "./routes";
import cacheController from "express-cache-controller";
import { scopePerRequest } from "awilix-express";
import container from "./di.container";
import MemoryStore from "memorystore";
import session from "express-session";

const app: Application = express();
//Configure env variables
configureDotEnv();

app.use(json());
app.use(compression());

app.use(scopePerRequest(container));

declare module "express-session" {
   interface SessionData {
      user: string;
      mail: string;
      fullname: string;
      bnumber: string;
      roles: string[];
      affliations: string[];
      isAdmin: boolean;
   }
}

const memorystore = MemoryStore(session);


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


