// HTTP methods -- GET, POST, PUT, DELETE

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(400).end('This is the home page. Guess what')
})

app.get('/api.courses', (req, res) => {
  res.send([1, 2, 3, 4])
})
//api/courses/1
app.get('/api/courses/:id/:name', (req, res) => {
  //   res.send(req.params)
  res.send(req.query) // query used = sortBy = name
})

// PORTS in the environment variables
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}....`)
})
