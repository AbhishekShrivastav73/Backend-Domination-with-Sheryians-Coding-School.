const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/practiceData')

const dataBase = mongoose.connection

dataBase.on('error',function(err){
    console.log(err);
})

dataBase.on('open',function(){
    console.log('Connected with Database');
})

module.exports = dataBase;
