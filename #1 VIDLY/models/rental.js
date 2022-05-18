const { date } = require('joi')
const Joi = require('joi')
const mongoose = require('mongoose')

const Rental = mongoose.model('Rental', new mongoose.Schema({
    customer: {
        type: new mongoose.Schema({
            name: {
                type: String,
                require: true,
            },
            isGold: {
                type: Boolean,
                default: false
            },
            phone:{
                type: String,
                require: true,          
            }
        }),
        required: true
    },
    movie: {
        type: new mongoose.Schema({
            title: {
                type: String, 
                required: true,
                trim: true,
            },
            dailyRentalRate: {
                type: Number,
                required: true,
            }
        }),
        required: true
    },
    dateOut: {
        type: Date,
        required: true,
        default: Date.now
    },
    dateReturned: {
        type:date
    }, rentalFee: {
        type: Number,
        min:0
    }
}))

function validateRental(rental){
    const schema = Joi.object({
        customerId: Joi.string().required(),
        movieId: Joi.string.required()
    })

    return schema.validate(rental)
}

module.exports = {validateRental, Rental}