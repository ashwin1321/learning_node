// Object ID

// _id: xxxxxxxxxxxxxxxxxxxxxxxx      (24 characterss) = 12 bytes
    // first 4 byte: timestamp 
    // 3 bytes: machine identifier
    // 2 bytes: process identifier
    // 3 bytes: counter


// driver  --> MongoDB


const mongoose  = require('mongoose')
const id = new mongoose.Types.ObjectId()
console.log(id.getTimestamp());