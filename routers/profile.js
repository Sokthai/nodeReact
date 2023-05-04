const express = require("express")
const router = express.Router()
const Profile = require("../models/Profile")
const auth = require("../middleware/auth")
const bcrypt = require("bcryptjs")
const gravatar = require("gravatar")
const {check, validationResult} = require("express-validator")
const User = require("../models/User")

// @router  POST /profile
// @desc    create or update a profile
// @access  Private
router.post("/", [
    check("phone", "please enter phone number").not().isEmpty(),
    check("street", "please enter street").not().isEmpty(),
    check("city", "please enter city").not().isEmpty(),
    check("state", "please enter state").not().isEmpty(),
    check("zipcode", "please enter phone zipcode").not().isEmpty(),
    check("question1", "please enter question").not().isEmpty(),
    check("question2", "please enter question").not().isEmpty(),
    check("question3", "please enter question").not().isEmpty(),
    check("answer1", "please enter answer").not().isEmpty(),
    check("answer2", "please enter answer").not().isEmpty(),
    check("answer3", "please enter answer").not().isEmpty(),
    auth
], async (req, res) => {
    try {
        



        const {phone, street, city, state, zipcode, question1, question2, question3, answer1, answer2, answer3} = req. body
        const id = req.user
        const profileFields = {    
            phone, street, city, state, zipcode, id,
            user : id,
            question : {
                "question1" : question1,
                "question2" : question2,
                "question3" : question3
            },
            answer : {
                "answer1" : answer1,
                "answer2" : answer2,
                "answer3" : answer3
            }
        }

        
        let profile = await Profile.findOne({user: id})
        if (profile){ // if found, update profile
            profile = await Profile.findOneAndUpdate({user: req.user}, {$set : profileFields}, {new: true})
            return res.status(200).json(profile)
        }
        //if not found, create profile
        profile = new Profile(profileFields)
        await profile.save()
        res.status(200).json(profile)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: [{msg: "server error"}]})
    }
})
 

// @router  POST /profile
// @desc    Register a profile
// @access  Private
router.get("/", auth, async (req, res) => {
    try {
        let profile = await Profile.findOne({user: req.user}).populate("user", ["password"])
        if (!profile){
            return res.status(400).json({error: [{msg: "profile not found"}]})
        }
        console.log(profile)
        res.status(200).json(profile)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: [{msg: "server error"}]}) 
    }
})


// @router  POST /profile
// @desc    Register a profile
// @access  Private
router.delete("/", auth, async (req, res) => {
    try {
        let profile = await Profile.findOneAndRemove({user: req.user})
        if (!profile){
            return res.status(400).json({error: [{msg: "profile not found"}]})
        }
        console.log(profile)
        res.status(200).json(profile)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: [{msg: "server error"}]}) 
    }
})




module.exports = router