const {Customer, validateCustomer} = require('../models/customer')
const express = require('express');;
const router = express.Router();
const mongoose = require('mongoose')
 
router.get('/', async (req,res)=>{
    const customers = await Customer.find().sort('name')
    res.send(customers)
})

router.post('/', async (req,res)=>{
    const {error} = customer.validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message )
    
    let customer = new Customer( {
        name: req.body.name,
        phone: req.params.phone,
        isGold: req.params.isGold
    })
    await customer.save()
    res.send(customer)
})

router.put('/:id', async (req,res)=>{

    const {error} = validateCustomer(req.body)
    if (error) return res.status(400).send(error.detail[0].message)

    const customer = await Customer.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        isGold: req.params.isGold,
        phone: req.params.phone},   
          {new: true})
         
    if(!customer) return res.status(400).send('The genre with given ID not found.......')

    res.send(customer)
})

router.delete('/:id',async (req,res)=>{

    const customer  = await Customer.findByIdAndRemove(req.params.id)
    if (!customer) return res.status(400).send('The requested genre not found..')

    res.send(customer)
})

router.get('/:id', async(req,res)=>{
    const customer = await Customer.findById(req.params.id)
    if (!customer) return res.status(400).send("The requested genre not found.....")

    res.send(customer)
    
})

module.exports = router;