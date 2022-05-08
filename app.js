// HTTP methods -- GET, POST, PUT, DELETE

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(400).end('This is the home page')
})

app.listen(2000, () => {
  console.log('Server is running on port 5000')
})

//
