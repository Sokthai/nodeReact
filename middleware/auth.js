const express = require("express")
const app = express()
const User = require("../models/User")
const bcryt = require("bcryptjs")

const auth = async (req, res, next) => {
    const {email, password} = req.body
    try {
        let user = await User.findOne({email}).select("id").select("password")
        if (!user){
            return res.status(404).json({error: [{msg: "user or password is incorrect"}]})
        }
        if (!bcryt.compareSync(password, user.password)){
            return res.status(404).json({error: [{msg: "user or password is incorrect--"}]})
        }
        req.user = user._id

        next()
    } catch (error) {
        console.log(error)
        return res.status(400).json({error: [{msg: "no email or password provided"}]})
    }

}

module.exports = auth
