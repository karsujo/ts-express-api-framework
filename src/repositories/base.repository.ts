import { ResultSetHeader, RowDataPacket } from "mysql2";
import connectionPool from "../infrastructure/db";
import { RowCount, TotalRecords } from "src/interfaces/base.interface";

type RowDataCompatible<T> = T extends RowDataPacket ? T : RowDataPacket;

export default class RepositoryBase {
   async executeQuery<T>(query: string, values?: any[]): Promise<RowDataCompatible<T>[]> {
      const connection = await connectionPool.getConnection();
      try {
         const [rows] = await connection.query<RowDataCompatible<T>[]>(query, values);
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
