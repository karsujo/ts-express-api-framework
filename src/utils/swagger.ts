import { Application, Request, Response } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { version } from "../../package.json";
import logger from "../infrastructure/logger";

const options: swaggerJSDoc.Options = {
   definition: {
      openapi: "3.0.0",
      info: {
         title: "Admisight-Server REST API Docs",
         version,
      },
      components: {
         securitySchemas: {
            // add relevant auth token after impl
            bearerAuth: {
               type: "http",
               scheme: "bearer",
               bearerFormat: "JWT",
            },
         },
      },
      security: [
         {
            bearerAuth: [],
         },
      ],
   },
   apis: ["./src/routes/*.ts", "./src/models/*.ts", "./src/interfaces/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app: Application, port: number) {
   app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

   //Get all Docs in Json format
   app.get("swagger.json", (req: Request, res: Response) => {
      res.setHeader("Content-Type", "application/json");
      res.send(swaggerSpec);
   });

   logger.info(`Docs available at http://localhost:${port}/swagger`);
}

export default swaggerDocs;
