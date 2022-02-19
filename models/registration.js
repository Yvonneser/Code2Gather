var mongoose = require('mongoose');
//Here you are building Schema that you want to save for each table
var registertionSchema = new mongoose.Schema({
  //columnsname (parmeter) : type
  UserId: String,
  inputage: String,
  inputgender:  String,
  inputProgYears : String
});

module.exports = mongoose.model('Registration', registertionSchema);
