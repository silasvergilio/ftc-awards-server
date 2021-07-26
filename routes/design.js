var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var db = require('../connection');

// create application/json parser
var jsonParser = bodyParser.json()

/* db.connect((err) => {
  if (err) throw err;
})
 */

/* GET teams listing. */
/* router.get('/', function (req, res, next) {

 
    console.log("get teams");
    var sql = 'SELECT * FROM teams';
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    })
}); */

/* GET teams listing by teamNumber. */
/* router.get('/:value', function (req, res, next) {

 
    var sql = 'SELECT * FROM teams WHERE value = ?';
    var values =  [req.params.value];
    db.query(sql,values, (err, result) => {
      if (err) throw err;
      res.send(result);
    })
  })
 */

router.post('/:teamNumber', jsonParser, function (req, res) {

    var sql = 'INSERT INTO design (motive,premiado,sala,position,Teams_idTime) VALUES (?,0,"A",0,(SELECT idTime FROM teams WHERE value = ?))';
    var values = [req.body.motivo, req.params.teamNumber]

    db.query(sql, values, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.send("Inserted");
    });

});

module.exports = router;