const express = require("express");
require("../src/db/conn");

// const  MensRanking = require("../src/models/mens");
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.PORT ||3000;
app.use(express.json());

const mens = require("./routers/olympicroute");
const marks = require("./routers/marks");
const auth = require("./routers/authentication")
const teacherauth = require("./routers/teacherAuthentication")
const adminauth = require("./routers/adminAuthentication")
const chat = require("./routers/interactChat")

                                             
app.use('/user',mens);
app.use('/marks',marks);
app.use('/auth',auth);
app.use('/teacherauth',teacherauth);
app.use('/adminauth',adminauth);
app.use('/chat',chat);


app.listen(port, ()=>{
    console.log(`connection is live at port no. ${port}`);
})




