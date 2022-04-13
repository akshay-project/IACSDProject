
const express = require('express');
const app=express();
const { realpathSync } = require('fs');
const router = express.Router();
const User = require('../models/scheduleSchema');
router.get('/', (req, res) => {
    res.send("Hello from the auth")
})

router.post('/add', async (req, res) => {

    try{
        const addingMensRecords= new User(req.body);
        console.log(req.body);
        const insertMens = await addingMensRecords.save();
        res.status(200).send(insertMens);
    }catch (err){
        res.status(400).send(err);
    }
    
})

router.get("/show",async(req,res)=>{
    try{
        const getMens =await User.find({});
        res.send(getMens);
    }catch(err){
        res.send(400).send(err);
        console.log(err);
    }
})
//update method (patch method)
router.patch("/update/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const updateMens =await User.findByIdAndUpdate({_id:_id},req.body,{
            new:true
        });

        res.send(updateMens);
    }catch(err){
        res.send(400).send(err);
        console.log(err);
    }
})


//Delete by method
router.delete("/delete/:id",async(req,res)=>{
    try{
        const deleteMens =await User.findByIdAndDelete(req.params.id);
        res.send(deleteMens);
    }catch(err){
        res.send(400).send(err);
    }
})


module.exports = router;