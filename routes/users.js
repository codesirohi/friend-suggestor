var express = require('express');
var router = express.Router();
var db = require("./database.js")



router.post('/', function(req, res, next) => {

  var data = {
    username: req.body.username,
  }

  var sql ='INSERT INTO user (username) VALUES (?)'
    var params =[data.username]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({
              
              "status":"faliure",
              "error": err.message
            })
            res.status(201).json({"username": ""})
            
            return;
        }
        res.json({
          "message": "success",
          "data": data,
          
      })
    

});


/* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//});

module.exports = router;
