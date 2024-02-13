var mysql = require('mysql')
require('dotenv').config();
var dbConfig = require('./dbconfig');

var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  connectionLimit : 10,
  //port: process.env.DB_PORT,
  database: dbConfig.DB,
});



module.exports = connection;