const express=require('express');
const router=express();

const {Movie,validateMovie}=require("../models/movie");
const { Genre } = require('../models/genre');


router.get("/",async(req,res)=>{
    const movie=await Movie.find().sort('name');
    res.send(movie);

})

router.post("/",async(req,res)=>{
    const {error}=validateMovie(req.body);

    if(error){
        return res.status(404).send(error.details[0].message);

    } 

    const genre = await Genre.findById(req.body.genreId);
    if(!genre){
        return res.status(404).send("Invalid ID");
    }
    const movie=new Movie({
        title: req.body.title,
        genre:{
            id: genre._id,
            name: genre.name,
            
        },
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    })

    const result=await movie.save();
    res.send(result);
})

module.exports=router;