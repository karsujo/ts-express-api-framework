import { RowDataPacket } from "mysql2";

export interface RowCount {
   count: number;
}
export interface TotalRecords extends RowCount, RowDataPacket {}
