import { ResultSetHeader, RowDataPacket } from "mysql2";
import connectionPool from "../infrastructure/db";
import { RowCount, TotalRecords } from "src/interfaces/base.interface";


export default class RepositoryBase {
   async executeQuery<T extends RowDataPacket>(query: string, values?: any[]): Promise<T[]> {
      const connection = await connectionPool.getConnection();
      try {
         const [rows] = await connection.query<T[]>(query, values);
         return rows;
      } finally {
         connection.release();
      }
   }

   async insert(query: string, values?: any[]): Promise<ResultSetHeader> {
      const connection = await connectionPool.getConnection();
      try {
         const [result] = await connection.query<ResultSetHeader>(query, values);
         return result;
      } finally {
         connection.release();
      }
   }

   async update(query: string, values?: any[]): Promise<ResultSetHeader> {
      const connection = await connectionPool.getConnection();
      try {
         const [result] = await connection.query<ResultSetHeader>(query, values);
         return result;
      } finally {
         connection.release();
      }
   }

   async delete(query: string, values?: any[]): Promise<ResultSetHeader> {
      const connection = await connectionPool.getConnection();
      try {
         const [result] = await connection.query<ResultSetHeader>(query, values);
         return result;
      } finally {
         connection.release();
      }
   }

   async count(table: string): Promise<RowCount> {
      const query = `SELECT table_rows as count FROM information_schema.tables WHERE table_name='${table}'`;
      const connection = await connectionPool.getConnection();
      try {
         const [result] = await connection.query<TotalRecords[]>(query);
         return result[0];
      } finally {
         connection.release();
      }
   }
}
