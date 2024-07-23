const mongoose = require("mongoose");
const debuglog = require("debug")("development:mongooseconfig");

mongoose.connect("mongodb://127.0.0.1:27017/testingbd"); // Connected Mongoose

const db = mongoose.connection; // iss variable k through hm sab perform kr paenge

db.on("error", function (err) {
  debuglog(err);
});

db.on("open", function () {
  // open means when it is connected
  debuglog("Connected to DB");
});

module.exports = db;
