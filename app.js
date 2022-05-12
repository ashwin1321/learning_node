// const express = require("express")
import express from "express"
const app = express()

app.get('/',(req,res)=>{
    res.send("This is the home page")
})

app.listen(5000,()=>{
    console.log(`Server starting at port 5000`);
})