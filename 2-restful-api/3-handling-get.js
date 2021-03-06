const express = require('express')
const app = express()

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },
]

app.get('/', (req, res) => {
  res.status(400).end('This is the home page. Guess what')
})

app.get('/api.courses', (req, res) => {
  res.send(courses)
})
//api/courses/1
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id))
  if (!course) {
    res.status(404).send('The course with the given ID was not found.')
  } else {
    res.status(200).send(course)
  }
})

// PORTS in the environment variables
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}....`)
})
