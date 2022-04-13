const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/olympic",{
    useUnifiedTopology: true
}).then(()=>{
    console.log("connection is establish");
}).catch((err)=>{
    console.log("err found");
});
