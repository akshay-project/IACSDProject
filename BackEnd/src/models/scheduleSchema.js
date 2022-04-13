const mongoose = require("mongoose");
const express = require('express');
const app = express();
const scheduleSchema = new mongoose.Schema({
  
  date: {
    type: String,
  },
  day: [{
    module:{
      type: String,
    },
    faculty:{
      type: String,
    },
    zoom:{
      type: String,
    },
    pass:{
      type: String,
    },
    time:{
      type: String,
    }
  }]
  
 
});

const schudule = mongoose.model("schudule", scheduleSchema);

module.exports = schudule;