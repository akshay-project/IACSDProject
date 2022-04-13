const express = require('express');
const app = express();

const cors = require("cors");
app.use(cors());

const user = require('../models/marks')


app.get('/', (req, res) => {
    res.send("Hello from the Marks")
})
//Add new data 
app.post("/add", async(req,res)=>{
    try{
        const addingMensRecords= new user(req.body);
        console.log(req.body);
        const insertMens = await addingMensRecords.save();
        res.status(200).send({msg:"Student Marks added succesfully!"});
        // res.status(200).send(insertMens);

    }catch (err){
        res.status(400).send(err);
    }
})




//show the data
app.get("/show",async(req,res)=>{
   try{
       const getMens =await user.find({});
       res.send(getMens);
   }catch(err){
       res.send(400).send(err);
       console.log(err);
   }
})


//get by indivisual ID
app.get("/getmark/:id",async(req,res)=>{
   try{
       const _id=req.params.id;
       const getMens =await user.findById({_id:_id});
       res.send(getMens);
   }catch(err){
       res.send(400).send(err);
       console.log(err);
   }
})







//update method (patch method)
app.patch("/updatemark/:id",async(req,res)=>{
   try{
       const _id=req.params.id;
       const updateMens =await user.findByIdAndUpdate({_id:_id},req.body,{
           new:true
       });

    //    res.send(updateMens);
       res.send({msg:true});

   }catch(err){
       res.send(400).send(err);
       console.log(err);
   }
})


//Delete by method
app.delete("/deletemark/:id",async(req,res)=>{
   try{
       const deleteMens =await user.findByIdAndDelete(req.params.id);
       res.send({msg:"Marks Deleted"});
   }catch(err){
       res.send({msg:"Marks Failed"});
   }
})



//Unique Methods
app.post('/findbymany', async (req, res) => {
    try {
        const { name } = req.body;
        const userName = await user.find({ name: name });
        
        if (userName) {
           res.send(userName);

        } else {
            res.send(" User Login Does Not Exist!");
        }
        // res.send(userLogin)

        // res.json({mess:"Login Succ"})
    } catch (err) {
        console.log(err);
    }
})





module.exports = app;
