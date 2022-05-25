var mysql = require('mysql')
require('dotenv').config();
var dbConfig = require('./dbconfig');

var connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  //port: process.env.DB_PORT,
  database: dbConfig.DB,
});

connection.connect((err) => {
  if (err) throw err;
})

module.exports = connection;