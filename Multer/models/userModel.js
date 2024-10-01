const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/multertests');

const userSchema = mongoose.Schema({
    name : String,
    image : Buffer,

})

const User = mongoose.model('User', userSchema);    

module.exports = User;