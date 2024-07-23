const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/advanceDB')

const userSchema = mongoose.Schema({
    username : String,
    name : String,
    password : String,
    age : Number,
    isMarried : Boolean,
    email : String,

})

module.exports = mongoose.model('user',userSchema)