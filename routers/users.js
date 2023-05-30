const express = require("express")
const router = express.Router()
const User = require("../models/User")
const auth = require("../middleware/auth")
const bcrypt = require("bcryptjs")
const gravatar = require("gravatar")
const {check, validationResult} = require("express-validator")


// @router  DELETE /user
// @desc    Delete a user
// @access  Private
router.delete("/", async (req, res) => {
    try {
        const {email} = req.body
        let del = await User.findOneAndDelete({email})
        console.log(del)
        res.status(200).json({msg: "user deleted"})
        
    } catch (error) {
        res.status(500).json({error : [{msg: "server error"}]})
    }
})




// @router  PUT /user
// @desc    Update user account
// @access  Private
router.put("/", [
    check("firstname", "Please enter firstname").not().isEmpty(),
    check("lastname", "Please enter lastname").not().isEmpty(),
    check("username", "Please enter username").not().isEmpty(),
    check("email", "Please enter email").not().isEmpty(),
    check("dateOfBirth", "Please enter dateOfBirth").not().isEmpty(),
    auth
], async (req, res) => {
    try {
        const {firstname, lastname, username, email, dateOfBirth, avatar} = req.body
        let user = await User.findOne({email}).select("-password")
        user.firstname = firstname
        user.lastname = lastname
        user.username = username
        user.email = email
        user.dateOfBirth = dateOfBirth
        user.avatar = avatar
        await user.save()
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({error : [{msg: "server error"}]})
    }
})

// @router  POST /user/login
// @desc    GET user
// @access  Private
router.put("/resetpassword", auth, async (req, res) => {
    try {
        const {newPassword, email} = req.body
        let user = await User.findOne({email})
        if (!user){
            return res.status(404).json({error: [{msg: "user or password is incorrect----"}]})
        }
        let salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(newPassword, salt);
        user.password = hash
        await user.save()
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({error : [{msg: "server error"}]})
    }
})


 


// @router  POST /user/login
// @desc    GET user
// @access  Private
router.get("/login", [
    check("email", "please enter email").isEmail().not().isEmail(),
    check("password", "please enter password").not().isEmpty()
], async (req, res) => {
    try {
        
        const {email, password} = req.body
        console.log(email)
        let user = await User.findOne({email})//.select("-password")
        console.log(user)
        
        if (!user){
            return res.status(400).json({error : [{msg: "user not found"}], status: 400})
        }
        if (!bcrypt.compareSync(password, user.password)){
            return res.status(404).json({error: [{msg: "password user not found---"}]})
        }

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error: [{msg: "server error"}]})
    }
})


// @router  POST /user
// @desc    Register User
// @access  Private
router.post("/", [
    check("firstname", "Please enter firstname").not().isEmpty(),
    check("lastname", "Please enter lastname").not().isEmpty(),
    check("username", "Please enter username").not().isEmpty(),
    check("email", "Please enter email").not().isEmpty(),
    check("password", "Please enter password").not().isEmpty(),
    check("dateOfBirth", "Please enter dateOfBirth").not().isEmpty(),
], async (req, res) => {
    try {
        const {firstname, lastname, username, avatar, email, password, dateOfBirth} = req.body
        let user = await User.findOne({"email" : email})
        if (user){
            return res.status(400).json({error : [{msg : email + " is already exist"}]})
        }
        user = new User({firstname, lastname, username, avatar, email, password, dateOfBirth})
        var gravatarURL = gravatar.url(email, {s: "100", r: "pg", d: "mm"});
        console.log(user)
        let salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password, salt);
        user.password = hash
        user.avatar = gravatarURL
        await user.save()
        res.status(200).json(user)
    } catch (error) {
        console.log("post user: " + error)
        res.status(500).json({error: [{msg: "post user server error"}]})
    }
})


module.exports = router