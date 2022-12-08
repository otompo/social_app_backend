import mysql from "mysql";
import donenv from "dotenv";

donenv.config();
// alter user 'root'@'localhost' identified with mysql_native_password by 'nameroot123@'
// console.log(process.env.HOST);
export const db = mysql.createConnection({
  host: "mysql-99430-0.cloudclusters.net",
  user: "admin",
  password: "6QSWX48m",
  database: "social",
  port: "10089",
});
