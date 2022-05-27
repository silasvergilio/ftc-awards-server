var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var db = require('../connection');

// create application/json parser
var jsonParser = bodyParser.json()



/* GET teams listing. */
router.get('/:award', function (req, res, next) {

     var sql = 'SELECT * FROM teams INNER JOIN ?? ON ??.Teams_idTime = teams.idTime ORDER BY ??.position;';
     let values = [req.params.award, req.params.award, req.params.award];
    db.query(sql,values, (err, result) => {
      if (err) throw err;
      res.send(result);
    })
});


router.put('/:award', jsonParser, function (req, res) {

  var sql = 'UPDATE ?? SET premiado = !premiado WHERE Teams_idTime = ? ';
  var values = [req.params.award,req.body.id]

  db.query(sql, values, function (err, result) {
    if (err) throw err;
    console.log("1 record updated");
    res.send("Inserted");
  });

});

router.delete('/:award', jsonParser, function (req, res) {

  var sql = 'DELETE FROM ?? WHERE Teams_idTime = ?';
  var values = [req.params.award,req.body.id]

  db.query(sql, values, function (err, result) {
    if (err) throw err;
    console.log("1 record deleted");
    res.send("Deleted");
  });

});


router.post('/:award', jsonParser, function (req, res) {

    var sql = 'INSERT INTO ?? (motive,premiado,sala,position,Teams_idTime) VALUES (?,0,?,0,(SELECT idTime FROM teams WHERE text = ?))';
    var values = [req.params.award,req.body.motive,req.body.sala, req.body.text]

    db.query(sql, values, function (err, result) {
      if (err) {
        res.status(500).send({
          SqlError: err,
          Status: 500
        });}
      console.log("1 record inserted");
      res.send("Inserted");
    });

});



module.exports = router;