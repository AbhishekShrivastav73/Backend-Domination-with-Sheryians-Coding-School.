const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    phone : Number,
    jobTitle : String,
    role: String,
    password : String
});

module.exports = mongoose.model('user',userSchema) //it is used to create a Collection