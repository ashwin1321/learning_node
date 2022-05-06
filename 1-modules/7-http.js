const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('This is the home page')
  } else if (req.url === '/about') {
    res.end('This is the about page')
  } else if (req.url === '/contact') {
    res.end('This is the contact page')
  } else {
    res.end('ERROR')
  }
})

server.listen(5000, () => {
  console.log(`server started at port 5000...`)
})
