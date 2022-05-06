// Events
// Event is the basic unit of communication between the application and the user.

const { EventEmitter } = require('stream')
// const emitter = new EventEmitter()

// emitter.on is the listener
// emitter.on('messageLogged', (arg) => {
//   console.log('Listener called', arg)
// })

// emit means making a noise or produce something
// emitter.emit('messageLogged', { id: 1, url: 'https://' }) // this object is event argument

const Logger = require('./2-logger')
const logger = new Logger()

// register the listener
logger.on('messageLogged', (arg) => {
  console.log('Listener called', arg)
})

logger.log('message')
