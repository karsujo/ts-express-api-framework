import postgres from "postgres";
import logger from "../logger/index";

try {
   if (process.env.DATABASE_URL_DEV == null) {
      throw "Unable to initialize database. Set the DATABASE_URL_DEV env";
   }
} catch (e) {
   logger.error(e);
   console.log(e);
}

const connectionString: string = process.env.DATABASE_URL_DEV!; //assert non-null
const sql = postgres(connectionString);
export default sql;
