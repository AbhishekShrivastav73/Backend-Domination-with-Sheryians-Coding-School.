const mongoose = require('mongoose');


const postSchema = mongoose.Schema({
    user : {type : mongoose.Schema.Types.ObjectId, ref : 'user'},
    content : String
})

module.exports = mongoose.model('post',postSchema)