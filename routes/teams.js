var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var db = require('../connection');

// create application/json parser
var jsonParser = bodyParser.json()



/* GET teams listing. */
router.get('/', function (req, res, next) {

 
    console.log("get teams");
    var sql = 'SELECT * FROM teams';
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    })
});

/* GET teams listing by teamNumber. */
router.get('/:value', function (req, res, next) {

 
    var sql = 'SELECT * FROM teams WHERE value = ?';
    var values =  [req.params.value];
    db.query(sql,values, (err, result) => {
      if (err) throw err;
      res.send(result);
    })
  })


router.post('/', jsonParser, function (req, res) {

    var sql = 'INSERT INTO teams (state,text,value,school) VALUES (?,?,?,?)';
    var values = [req.body.state, req.body.text, req.body.value, req.body.school]

    db.query(sql, values, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
    res.send(req.body.state);

});

module.exports = router;