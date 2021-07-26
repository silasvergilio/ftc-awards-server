var mysql = require('mysql')
require('dotenv').config();

var connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    port: process.env.DB_PORT,
    database : "ftcawards",
  });

  connection.connect((err) => {
    if (err) throw err;
  })
  
  module.exports = connection;
