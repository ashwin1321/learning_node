// path modules

const path = require('path')

const pathObj = path.parse(__filename) // parse the path and return an object with the following properties: root, dir, base, ext, name
console.log(pathObj)
