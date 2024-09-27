const mongoose = require('mongoose')

let userSchema = mongoose.Schema({
    name : {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email : {
        type: String,
        required: true,
        unique: true,
       
    },password :{
        type: String,
        required: true,
        minlength: 8,
        
    }
})

module.exports = mongoose.model('User',userSchema)