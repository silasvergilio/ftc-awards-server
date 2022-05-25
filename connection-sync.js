var mysql = require('sync-mysql');

require('dotenv').config();

var connection = new mysql({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    port: process.env.DB_PORT,
    database : "ftcawards",
  });

  module.exports = connection;
