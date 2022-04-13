// const express = require("express");

const mongoose = require("mongoose");

const marksSchema = new mongoose.Schema({
    _id:{
        type:String
    },
    marks:[
        
    ]
    

});

///we are crate new collection
const Marks = new mongoose.model("marks",marksSchema);

module.exports = Marks;