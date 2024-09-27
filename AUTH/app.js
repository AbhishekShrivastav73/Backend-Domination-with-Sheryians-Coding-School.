const express = require('express');
const app = express();
require('dotenv').config()
const mongooseconnnetion = require('./config/mogoose')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieparsers = require('cookie-parser');
const userModel = require('./models/user');
const authRoutes = require('./routes/authRoutes')

app.use(cookieparsers());

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use('/api/auth',authRoutes)

app.post('/encrypt',async (req,res)=>{
    let salt = await bcrypt.genSalt();
    let hasded = await bcrypt.hash('chacha',salt)
    res.send(hasded)
});

app.post('/decrypt',async (req,res)=>{
    let  result = await bcrypt.compare('chacha',"$2b$10$XJMcuuZHLSDs1wWHoEKQDOohKGA/qMPc0wLYFxXLyEZSwygrIE9SS")
    res.send(result)
})

app.get('/tokenmaker', (req,res)=>{
  let token =  jwt.sign({name : "abhishek"},'chacha')
  res.send(token)
})
app.get('/decode', (req,res)=>{
  let data =  jwt.decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWJoaXNoZWsiLCJpYXQiOjE3MjcyODY3MDJ9.pdvPO5RJfgPRDeWE70hOH7hLM715E3MNQF3nRCeLPi0','chacha')
  res.send(data)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

