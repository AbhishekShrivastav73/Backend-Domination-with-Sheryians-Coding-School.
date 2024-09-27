const mongoose = require('mongoose');

mongoose.connect(`${process.env.MONGO_URL}/testAuth`);

const db = mongoose.connection;

db.on('error', ()=> console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Connected to MongoDB');
});