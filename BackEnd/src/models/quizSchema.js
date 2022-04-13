const mongoose = require("mongoose");
const express = require('express');
const app = express();
const quizSchema = new mongoose.Schema({

    question: {
        type: String,
    },
    answers: [
        
    ],
    correct: {
        type: Number,
    }

});

const User = mongoose.model("quiz", quizSchema);

module.exports = User;