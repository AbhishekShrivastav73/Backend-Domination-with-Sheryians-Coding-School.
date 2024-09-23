const mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.0.1/27017/testtesttest`);

const db = mongoose.connection;

db.once('open', function() {
    console.log('Connected to MongoDB');
})

module.exports  = db;