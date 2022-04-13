const express = require('express');
const bcrypt = require('bcryptjs');
const app = express();
const cors = require("cors");
app.use(cors());

const AuthenticationAdmin = require('../models/adminAuthSchema')


app.get('/', (req, res) => {
    res.send("Hello from the AuthenticationTeacher")
})


app.post('/register', async (req, res) => {
    const { _id, name, email, pass, copass } = req.body;


    if (!_id, !name || !email || !pass || !copass) {
        return res.status(422).json({ err: "Please fill all the fiels" });
    }

    try {
        const userExist = await AuthenticationAdmin.findOne({ _id: _id });
        if (userExist) {
            return res.status(422).json({ err: "Id already axits" });
        } else if (copass != pass) {
            return res.status(422).json({ err: "Password Mismatch" });
        } else {
            const user = new AuthenticationAdmin({_id, name, email, pass, copass });
            //Conver to hash
            const userRegister = await user.save();
            res.status(201).json({ msg: "Successfully1" });
        }

    } catch (err) {
        console.log(err);
    }
})






app.post('/login', async (req, res) => {
    try {
        const { _id, pass } = req.body;
        if (!_id || !pass) {
            res.send("Error")
        }
        const userLogin = await AuthenticationAdmin.findOne({ _id: _id });
        if (userLogin) {
            const isMatch = await bcrypt.compare(pass, userLogin.pass)
            if (!isMatch) {
                res.send(null);
            } else {
                res.send(userLogin)
            }
        } else {
            res.send(null);
        }
        // res.send(userLogin)

        // res.json({mess:"Login Succ"})
    } catch (err) {
        console.log(err);
    }
})



module.exports = app;