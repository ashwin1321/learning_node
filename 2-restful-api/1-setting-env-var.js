// HTTP methods -- GET, POST, PUT, DELETE

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(400).end('This is the home page. Guess what')
})

app.get('/api', (req, res) => {
  res.send([1, 2, 3, 4])
})

// This port may not be available all the time , so we use environment variables
// app.listen(3000, () => {
//   console.log('Server is running on port 5000')
// })

// PORTS in the environment variables
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}....`)
})
