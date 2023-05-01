const express = require("express")
const router = express.Router()
const User = require("../models/User")
const auth = require("../middleware/auth")
const bcrypt = require("bcryptjs")
// @router  GET /user
// @desc    GET User
// @access  Private
router.get("/", async (req, res) => {
    try {
        let user = await User.findById(req.params.id).select("-password")
        if (!user){
            return res.status(400).json({error : [{msg: "cannot find user"}]})
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error: [{msg: "server error"}]})
    }
})


// @router  POST /user
// @desc    Register User
// @access  Private
router.post("/", auth, async (req, res) => {
    try {
        
        

        const {firstname, lastname, username, avatar, email, password, dateOfBirth} = req.body
        let user = await User.findOne({"email" : email})
        
        
        if (user){
            return res.status(400).json({error : [{msg : email + " is already exist"}]})
        }
        user = new User({firstname, lastname, username, avatar, email, password, dateOfBirth})
        let salt = bcrypt.genSaltSync(21);
        let hashPassword = await bcrypt.hash(password, salt);
        
        console.log(user)


        user.password = hashPassword
        await user.save()
        return res.status(200).json(user)
    } catch (error) {
        console.log("post user: " + error)
        res.status(500).json({error: [{msg: "post user server error"}]})
    }
})


module.exports = router