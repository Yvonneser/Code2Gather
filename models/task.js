var mongoose = require('mongoose');
//Here you are building Schema that you want to save for each table
var taskSchema = new mongoose.Schema({
  //columnsname (parmeter) : type
  content: String,
  startTime: {type: String, default: "9:44"},
  endTime: {type: String, default: "9:50"},
  chatboxlistMessages : String
});

module.exports = mongoose.model('Task', taskSchema);
