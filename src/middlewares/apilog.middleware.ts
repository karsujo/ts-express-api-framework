import { NextFunction, Request } from "express";
import { randomUUID } from "crypto";
import { LogService } from "../services/log.service";
import { makeInvoker } from "awilix-express";

/**
 * Middleware for logging API requests and responses.
 */
class ApiLogMiddleware {
   private _service: LogService;

   constructor({logService}:{logService:LogService}) {
      this._service = logService; 
   }

   private responseInterceptor(res: any, send: any, requestId: string) {
      return function intercept(content: any) {
         res.requestId = requestId;
         res.contentBody = content;
         res.send = send;
         res.send(content);
      };
   }

   public async logAPI(req: Request, res: any, next: NextFunction) {
      const startTime = Date.now();
      const requestId: string = randomUUID();

      this._service.logRequest(requestId, req);

      /*
      Express does not expose a way to directly consume the response body from the Response object.

      Replace the res.send callback with an intercepting callback which will take any content
      passed into res.send() and add it to a new field called res.contentBody. This is used to log
      the response body on 'finish'. The interceptor also adds a unique requestId to every request. 
      */
      res.send = this.responseInterceptor(res, res.send, requestId);
      res.on("finish", () => {
         const endTime = Date.now();
         const responseTime = endTime - startTime;
         this._service.logResponse(requestId, res.contentBody, res.statusCode, responseTime);
      });

      next();
   }
}

const ApiLogMiddlewareInvoker = makeInvoker(ApiLogMiddleware);

export default ApiLogMiddlewareInvoker;