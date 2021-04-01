require("dotenv").config();

const promise_mysql = require('promise-mysql');

const ConnectionString = {
    connectionLimit: 10,
    host: process.env.DB_HOST, // it should be "db"
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    multipleStatements: true
}

const mysqlPoolDb = promise_mysql.createPool(ConnectionString);

module.exports = { mysqlPoolDb };
