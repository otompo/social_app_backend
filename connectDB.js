import mysql from "mysql";
import donenv from "dotenv";

donenv.config();
// alter user 'root'@'localhost' identified with mysql_native_password by 'nameroot123@'
// console.log(process.env.HOST);
export const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT,
});
