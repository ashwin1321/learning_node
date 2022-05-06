const { EventEmitter } = require('stream')
// const emitter = new EventEmitter()

const url = 'http://mylogger.io/log'

class Logger extends EventEmitter {
  log(message) {
    // send an HTTP request
    console.log(message)

    // emitter.emit('messageLogged', { id: 1, url: 'https://' }) // this object is event argument
    // // this emitter is not fired in normal case in exported file
    this.emit('messageLogged', { id: 1, url: 'https://' })
  }
}

module.exports = Logger

// module.exports.endPoint = url

// app.js

// const logger = require('./2-logger')
// console.log(logger.log('Hello World'))
