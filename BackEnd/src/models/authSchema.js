const bcrypt = require('bcryptjs');
const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
    _id:{
        type:String
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    pass:{
        type:String,
        required:true,
    },
    copass:{
        type:String,
        required:true,
    }
});


authSchema.pre('save', async function(next) {
    if(this.isModified('pass')){
        this.pass=await bcrypt.hash(this.pass,12);
        this.copass=await bcrypt.hash(this.copass,12);
    }
    next();
});



const Authentication = new mongoose.model("auth",authSchema);

module.exports = Authentication;