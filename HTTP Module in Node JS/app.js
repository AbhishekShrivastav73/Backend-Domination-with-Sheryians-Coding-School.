let http = require('http');

// Basic Code to create server 
 
// let server = http.createServer(function(req,res){
//     res.end('Server is starting')
// })

// server.listen(3000)

// Basic Routing in Node js

let server = http.createServer(function(req,res){
    if(req.url === '/')   res.end('/ Route');
    else if(req.url === '/profile') res.end('Profile Page');
    else res.end('Page Not Found')
  
})

server.listen(3000)