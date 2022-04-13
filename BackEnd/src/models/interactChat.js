// const express = require("express");

const mongoose = require("mongoose");

const interactChatSchema = new mongoose.Schema({
   
    question:{
        type:String
    },
    studentId:{
        type:String
    },
    teacherReplys:[
        
    ]
    

});

///we are crate new collection
const Chats = new mongoose.model("chat",interactChatSchema);

module.exports = Chats;