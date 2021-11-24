
const mysql = require("mysql2");

const connection = mysql.createPool({
    connectionLimit: 10,
    host:  "localhost",
    port: "3306",
    user: "root",
    password: "password",
    database: "test",
});

const promisePool = connection.promise();

module.exports = promisePool;