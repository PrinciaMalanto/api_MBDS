var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  name: String,
  password: String,
  role: String
});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User',UserSchema);