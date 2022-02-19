/*this type of pages that are under the routes folder are to control the actions we did in each page  */

var express = require('express');
var router = express.Router();

var config = require('../config');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Code2Gether - a platform for sharing code Experiment.' });
});

router.route('/consent')
  .get(function(req, res, next) {
    res.render('consent',{ title: 'Code2Gether - ConsentForm.' });
  })
  .post(function (req, res, next) {
    res.render('/Registration');
  });

router.route('/Registration')
  .get(function(req, res, next) {
    var newRegistration= new Registration()
    newRegistration.save(function( err, data) {
      if (err) {
        console.log(err);
        res.render('error');
      } else {
          res.render('Registration',{ title: 'Code2Gether - Registration.' });
          console.log("hiii "+ req.UserId);
          newRegistration.UserId= req.body.UserId;
      }
    })

  })
  .post(function (req, res, next) {
    res.render('/task');
  });

router.route('/task')
    .post(function (req, res, next) {
      res.render('/finishedTasks');
    });
    router.route('/finishedTasks')
        .get(function(req, res, next) {
          res.render('finishedTasks',{ title: 'Code2Gether - finishedTasks.' });
        });


module.exports = router;
