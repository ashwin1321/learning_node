const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const _  = require('lodash')
const bcrypt = require('bcrypt')

const {User, validateUser} = require('../models/user')


router.post('/', async (req,res)=>{
    const {error} = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message )

     let user = await User.findOne({ email: req.body.email});
     if(user) return res.status(400).send(`user already register....`)
    
    user = new User(
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password
    // }
    _.pick(req.body, ['name','email','password']))
    
    //hashing
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password,salt) 
    
    await user.save()

    res.send(_.pick(user, [ 'id','name','email']))
})

module.exports = router;

//  /api/users
// result