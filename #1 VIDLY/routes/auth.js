// Authenticate garne la yesari 

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const _  = require('lodash')
const bcrypt = require('bcrypt')
const Joi = require('joi')

const {User} = require('../models/user')


router.post('/', async (req,res)=>{

    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message )

     let user = await User.findOne({ email: req.body.email});
     if(!user) return res.status(400).send(`Invalid email or password....`)
      
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword) return res.status(400).send('invalid email or password.....')

    res.send(true)
})

function validate(req){
    const schema =Joi.object( {
        email: Joi.string().min(12).max(85).email().required(),
        password: Joi.string().min(8).max(1024).required()                // for complex password  == joi password complexity google g
    }) 
    return schema.validate(req)
}

module.exports = router;

//  /api/users