const express = require("express")
const app = express()

const auth = async (req, res, next) => {
    const {email, password} = req.body
    if (email && password){
        next()
    }else{
        return res.status(400).json({error: [{msg: "no email or password provided"}]})
    }
}

module.exports = auth
