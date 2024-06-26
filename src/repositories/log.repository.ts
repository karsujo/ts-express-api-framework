import { ResultSetHeader } from "mysql2";
import { Request } from "express";
import RepositoryBase from "./base.repository";

/**
 * Repository class for logging.
 */
export class LogRepository extends RepositoryBase {
   public async logRequest(
      requestId: string,
      userId: string,
      request: Request,
   ): Promise<ResultSetHeader> {
      const headers = JSON.stringify(request.headers);
      const session = JSON.stringify(request.session);
      const requestBody = JSON.stringify({ body: request.body });
      const query =
         "INSERT INTO api_log(request_id, headers, session, type, ip, request, url, created_on, user_id) VALUES(?,?,?,?,?,?,?,NOW(),?)";
      const values = [
         requestId,
         headers,
         session,
         request.method,
         request.ip,
         requestBody,
         request.url,
         userId,
      ];
      return await this.insert(query, values);
   }

   public async logResponse(
      requestId: string,
      response: string,
      statusCode: number | undefined,
      responseTime: number,
   ): Promise<ResultSetHeader> {
      const responseBody = JSON.stringify({ body: response });
      const query =
         "UPDATE api_log SET response = ?, status_code = ?, response_time_ms = ?, updated_on = NOW() WHERE request_id = ?";
      const values = [responseBody, statusCode, responseTime, requestId];
      return await this.update(query, values);
   }
}
