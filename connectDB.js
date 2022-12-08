import mysql from "mysql";

// export const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root123@",
//   database: "social",
// });

export const db = mysql.createConnection({
  host: "mysql-99430-0.cloudclusters.net",
  user: "admin",
  password: "6QSWX48m",
  database: "social",
  port: "10089",
});
