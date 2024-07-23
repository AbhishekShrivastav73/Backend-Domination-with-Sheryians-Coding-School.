const express = require('express');
const app = express();
const userModel = require('./models/user')

const users = [
    {
      username: "john_doe",
      name: "John Doe",
      password: "password123",
      age: 28,
      isMarried: false,
      email: "john.doe@example.com"
    },
    {
      username: "jane_smith",
      name: "Jane Smith",
      password: "securepass",
      age: 32,
      isMarried: true,
      email: "jane.smith@example.com"
    },
    {
      username: "sam_jones",
      name: "Sam Jones",
      password: "mypassword",
      age: 22,
      isMarried: false,
      email: "sam.jones@example.com"
    },
    {
      username: "linda_wilson",
      name: "Linda Wilson",
      password: "password321",
      age: 45,
      isMarried: true,
      email: "linda.wilson@example.com"
    },
    {
      username: "michael_brown",
      name: "Michael Brown",
      password: "pass1234",
      age: 36,
      isMarried: false,
      email: "michael.brown@example.com"
    }
  ];
  
app.get('/',function(req,res){
    res.send('Working')
})
app.get('/find',async function(req,res){
    let data = await userModel.find({$and : [{isMarried : false} , {age : {$gte : 32    }}]})
    res.send(data)
})

app.listen(3000)