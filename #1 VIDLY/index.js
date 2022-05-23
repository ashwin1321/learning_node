const Joi =  require('joi')
// Joi.objectId = require('joi-objectid')(Joi);
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const genres = require('./routes/genres')
const customers = require('./routes/customers')
const movies = require('./routes/movies')
const rentals = require('./routes/rentals')
const users = require('./routes/users')


mongoose.connect('mongodb://localhost/vidly')
    .then(()=>console.log(`Connected to mongoDB`))
    .catch(err => console.error(`could not connect to the database.....`))

app.use(express.json())
// console.log("Hello World")
app.use('/api/genres',genres)
app.use('/api/customers', customers)
app.use('/api/movies', movies)
app.use('/api/rentals', rentals)
app.use('/api/users', users)


// const port = process.env.PORT || 3000;
const port=8080;
app.listen(port, ()=>{console.log(`Listening on port ${port}......`);})

