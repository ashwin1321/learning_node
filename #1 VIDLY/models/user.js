const Joi = require('joi')
const mongoose = require('mongoose')

const User =  mongoose.model('User', new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        minlength: 5,
        maxlength: 50
    },

    email: {
        type: String, 
        required: true, 
        minlength: 12,
        maxlength: 85,
        unique: true
    },
    password: {
        type: String, 
        required: true, 
        minlength:8,
        maxlength: 1024,
        // unique: true
    }
}))




function validateUser(user){
    const schema =Joi.object( {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(12).max(85).email().required(),
        password: Joi.string().min(8).max(1024).required()
    }) 
    return schema.validate(user)
}

    module.exports = {User, validateUser}