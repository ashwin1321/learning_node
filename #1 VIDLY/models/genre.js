const Joi = require('joi')
const mongoose = require('mongoose')

const genreSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 50
    }
})
const Genre =  mongoose.model('Genre', genreSchema)

// const genres = [
//     {id:1, name: "Action"},
//     {id:2, name: "Horror"},
//     {id:3, name: "Romance"}    
// ]
// ]


function validateGenre(genre){
    const schema =Joi.object( {
        name: Joi.string().min(3).required()
    })
    return schema.validate(genre)
}

module.exports = {Genre, validateGenre, genreSchema}