const Joi = require('joi')
const express = require('express')
const app = express()

app.use(express.json())

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },
]

app.get('/', (req, res) => {
  res.status(400).end('This is the home page. Guess what')
})

app.get('/api/courses', (req, res) => {
  res.send(courses)
})

app.post('/api/courses', (req, res) => {
  // validation using Joi
  const { error } = validateCourse(req.body) // result.error
  if (error) {
    res.status(400).send(error.details[0].message)
    return
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name, // postman ko body ma eauta json banaune naam bhandai
  }

  courses.push(course)
  res.send(course)
})

app.put('/api/courses/:id', (req, res) => {
  // look for the course
  // if no course and no valid id, return 404

  const course = courses.find((c) => c.id === parseInt(req.params.id))
  if (!course) {
    res.status(404).send('The course with the given ID was not found.')
  }

  //validate
  // const result = validateCourse(req.body)
  const { error } = validateCourse(req.body) // result.error
  if (error) {
    res.status(400).send(error.details[0].message)
    return
  }

  // update course
  course.name = req.body.name
  res.send(course)
})

function validateCourse(course) {
  const schema = { name: Joi.string().min(3).required() }
  return Joi.validate(course, schema)
}

// PORTS in the environment variables
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}....`)
})
