const random = require("../utilis/random");

module.exports.indexController = function (req, res) {
  console.log(random());
  res.render('index');
};
