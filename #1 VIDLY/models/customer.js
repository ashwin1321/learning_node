const Joi = require('joi')
const mongoose = require('mongoose')

const Customer =  mongoose.model('Customer', new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 50
    },
    isGold: {
        type: boolean,
        default: false
    },
    phone: {
        type: String, 
        required: true,
        minlength: 7,
        maxlength: 50
    }
}))


function validateCustomer(customer){
    const schema =Joi.object( {
        name: Joi.string().min(5).max(50).required(),
        phone: Joi.string().min(5).max(50).required(),
        isGold: Joi.boolean()
    })
    return schema.validate(customer)
}

module.exports = { Customer, validateCustomer}
// exports.Customer = Customer;
// exports.validate = validateCustomer;
