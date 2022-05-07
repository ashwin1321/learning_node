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
  const schema = { name: Joi.string().min(3).required() }

  const result = Joi.validate(req.body, schema)
  // console.log(result)
  if (result.error) {
    res.status(400).send(result.error.details[0].message)
    return
  }

  // normal validation case
  // if (!req.body.name || req.body.name.length < 3) {
  //   // 400 bad request
  //   res.status(400).send('Name is required and should be at least 3 characters')
  //   return
  // }

  const course = {
    id: courses.length + 1,
    name: req.body.name, // postman ko body ma eauta json banaune naam bhandai
  }

  courses.push(course)
  res.send(course)
})

// PORTS in the environment variables
const port = process.env.PORT || 3000
app.listen(2000, () => {
  console.log(`Server listening on port ${port}....`)
})
