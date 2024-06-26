import * as mysql from "mysql2/promise";
import dotenv from "dotenv";

// Database configuration
// Get the database parameters from the environment variables
const environment = process.env.NODE_ENV || "dev";
let path;
if (environment === "prod") {
   path = ".env";
} else {
   path = `.${environment}.env`;
}
console.log(`Getting database parameters from ${path}`);

dotenv.config({ path: path });

const dbConfig = {
   host: process.env.DB_HOSTNAME,
   user: process.env.DB_USERNAME,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
   port: Number(process.env.DB_PORT) || 3306,
};

const connectionPool = mysql.createPool(dbConfig);

export default connectionPool;
