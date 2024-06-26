import { Request } from "express";
import { LogRepository } from "src/repositories/log.repository";

/**
 * Service class for logging.
 */
export class LogService {
   private _logRepository: LogRepository;

   constructor({logRepository}:{logRepository:LogRepository}) {
      this._logRepository = logRepository;
   }

   public async logRequest(requestId: string, req: Request) {
      const userId: string = req?.session?.id;

      this._logRepository.logRequest(requestId, userId, req);
   }

   public async logResponse(
      requestId: string,
      responseBody: any,
      statusCode: number | undefined,
      responseTime: number,
   ) {
      this._logRepository.logResponse(requestId, responseBody, statusCode, responseTime);
   }
}
