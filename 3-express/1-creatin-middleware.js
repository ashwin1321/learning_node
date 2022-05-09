
// Middleware  -- takes request,  returns a response object or calls next function in the chain

// import express from 'express'
const express = require("express")
const app = express()

const logger = require('./app.js')

app.use(express.json())            // 

// app.use((req, res, next) => {
//   console.log('Logging....')
//   next();               // next garena bhane tala ko chalnai didaina, lastai xada xa yo next
// })
app.use(logger)

app.use((req,res,next)=>{
  console.log('Authenticating......');
  next()
})
 
app.get('/',(req,res)=>{
  res.send("This is the home page")
})
app.get('/api/courses',(req,res)=>{
  res.send("This is none of your business");
})

app.listen(5000,()=>{
  console.log("Server listening at port 5000.....");
})




// make another file app.js

// function log (req, res, next) {
//   console.log('Logging....')
//   next();               // next garena bhane tala ko chalnai didaina, lastai xada xa yo next
// }

// module.exports = log;