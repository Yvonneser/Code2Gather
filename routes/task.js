var express = require('express');
var router = express.Router();
var currentIndex = 0;
//list task contain the Questions you want to put to the Participant
var listTask = ["How do you remove duplicates from an array in place?","How do you find the largest and smallest number in an unsorted integer array?"]
console.log("here with " + currentIndex);
var currentTask = listTask[currentIndex]
console.log(currentTask);

router.get('/task', function(req, res) {
  var newTask = new Task();
currentIndex = 0;
  newTask.save(function( err, data) {
    if (err) {
      console.log(err);
      res.render('error');
    } else {
      res.redirect('/task/' + data._id );
    }
  })
});

// here is the step moving to the next task of the list
router.get('/newTask', function(req, res) {
  console.log("in new task route");
  var newTask = new Task();
  currentIndex++;
  newTask.save(function( err, data) {
    if (err) {
      console.log(err);
      res.render('error');
    } else {
      console.log("here")
      if (currentIndex< listTask.length) {
        res.redirect('/task/' + data._id );
      }else {
        console.log("task finished")
        res.redirect('/finishedTasks');
      }
    }
  })
});

router.get('/task/:id', function(req, res) {
  if (req.params.id) {
    Task.findOne({_id: req.params.id}, function(err, data) {
      if (err) {
        console.log(err);
        res.render('error');
      }

      if (data) {
        currentTask = listTask[currentIndex]
        res.render('task', {content: data.content, roomId: data.id, currentTask: currentTask,currentIndex: currentIndex+1});
      } else {
        res.render('error');
      }
    })
  } else {
    res.render('error');
  }
});

module.exports = router;
