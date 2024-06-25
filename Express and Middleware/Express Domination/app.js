const express =require('express');
const app = express();
const expressSession = require('express-session');
const flash = require('connect-flash')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')

// app.use(function(req,res,next){
//     console.log('Middleware Running');
//     next();
// })

app.use(expressSession({
    secret : "random",
    resave : false,
    saveUninitialized : false
}))

// Creating Sessions

// app.get('/create',(req,res)=>{
//     req.session.details = {
//         name : "abhishek",
//         age : 22
//     }

//     res.send('Session Created')
// })


// app.get('/check',function(req,res){
//     console.log(req.session.details);
// })


//Connect Flash 

app.use(flash())

//CORS

app.use(cors())

// or 

// app.get('/route',cors(),(req,res)=>{})

// Cookie Passer Middleware

app.use(cookieParser())

//Morgan 
app.use(morgan('dev'))

app.get('/createCookie',function(req,res){
    res.cookie('name','Abhishek')
    res.send('Cookie Setted')
})
app.get('/checkCookie',function(req,res){
    console.log(req.cookies.name);
    res.send('Cookie Reading')
})

app.get('/profile/:username',function(req,res){
    res.send(req.params.username)
})
app.get('/author/:username/:age',function(req,res){
    res.send('something about ' +  req.params.username+ ' who is of age ' + req.params.age)
})


app.get('/',(req,res)=>{
    res.send('server running')
})
app.get('/flash',(req,res)=>{
    req.flash('data','Message');
    res.redirect('/error')
})

app.get('/error',(req,res)=>{
    let msg = req.flash('data')
    res.send(msg)
})
app.get('*',(req,res)=>{
    res.send('This is universal Route')
})

app.listen(3000)