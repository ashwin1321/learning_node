const express = require('express')
const app = express()
const mongoose = require('mongoose')
const genres = require('./routes/genres')
const customers = require('./routes/customers')

mongoose.connect('mongodb://localhost/vidly')
    .then(()=>console.log(`Connected to mongoDB`))
    .catch(err => console.error(`could not connect to the database.....`))

app.use(express.json())
// console.log("Hello World")
app.use('/api/genres',genres)
app.use('/api/customers', customers)


// const port = process.env.PORT || 3000;
const port=8080;
app.listen(port, ()=>{console.log(`Listening on port ${port}......`);})

