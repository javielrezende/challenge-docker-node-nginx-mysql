require('dotenv').config();

const config = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);

module.exports = connection;