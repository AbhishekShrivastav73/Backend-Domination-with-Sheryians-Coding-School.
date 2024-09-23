module.exports = function(req, res, next) {
    req.data = "Abhishek"
    console.log('User is already logged in')
    next();
}