const fs = require('fs')

// const files = fs.readdirSync('./') // synchronous version of readdir
// console.log(files)

fs.readdir('./', (err, files) => {
  //asynchronous version of readdir
  if (err) {
    console.log('Error', err)
  } else {
    console.log('Result', files)
  }
})
