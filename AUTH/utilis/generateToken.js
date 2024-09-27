const jwt = require('jsonwebtoken');

const generateToken =(data)=>{
    let token  = jwt.sign(data,process.env.JWT_SECRET);
    return token;
}

module.exports = generateToken