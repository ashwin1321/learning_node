
// Middleware  -- takes request,  returns a response object or calls next function in the chain

// import express from 'express'
const express = require("express")
const app = express()
const config = require('config')

const helmet = require("helmet")      // This is the third party middleware
const morgan = require("morgan")      // This is the third party middleware

// ######  DEBUGGER  #######
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db')


// ##########  PUG  ###########
app.set('view engine','pug');             // work as require
app.set('views',"./views")               // default


// const logger = require('./app.js')


// ###### ENVIRONMENT VARIABLE #########
// console.log(`Node_ENV: ${process.env.NODE_ENV}` );
// console.log(`app :  ${app.get('env')}`);


// ############ TYPES OF MIDDLEWARE ################

// builtin middleware
app.use(express.json())     // parses the body of the request. And if there's json obj it'll populate  "req.body" property       
app.use(express.urlencoded({extended: true}))   //parses incoming requests.     // key value pair pathaune
app.use(express.static('public'))         //serve static files

// Third party middleware
app.use(helmet())

if (app.get('env')=== 'development'){              // production ma export garda yesko dekhaudaina kei ni la 
  app.use(morgan('tiny'))
  // console.log('Morgan enabled....');
  startupDebugger('Morgan enabled.....')
}

// ##################### ---- ####################d

// db work
dbDebugger('Connected to the database....');

// ##### CONFIGURATION 
// // config folder bhitra ko json files haru lai dekhauxa la
console.log('Application  Name: '+ config.get('name'));
console.log('Mail Server  Name: '+ config.get('mail.host'));
console.log('Mail Server  password: '+ config.get('mail.password'));


app.use((req, res, next) => {
  console.log('Logging....');
  next();               // next garena bhane tala ko chalnai didaina, lastai xada xa yo next
})
// app.use(logger)

app.use((req,res,next)=>{
  console.log('Authenticating......');
  next()
})

// #########  ROUTING  ###########
app.get('/',(req,res)=>{
  // res.send("This is the home page")
  res.render('index.pug',{title: "My Express App", message:"hello"});       // using pug
})
app.get('/api/courses',(req,res)=>{
  res.send("This is none of your business");
  
})

app.post('/admin',(req,res)=>{
  res.send('This is the admin panel...')
})

const port = process.env.PORT || 3000;
app.listen(port,()=>{ 
  console.log(`Server listening at port ${port}.....`);
})



// make another file app.js

// function log (req, res, next) {
//   console.log('Logging....')
//   next();               // next garena bhane tala ko chalnai didaina, lastai xada xa yo next
// }

// module.exports = log;