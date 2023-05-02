const express = require("express")
const router = express.Router()
const Profile = require("../models/User")
const auth = require("../middleware/auth")
const bcrypt = require("bcryptjs")
const gravatar = require("gravatar")
const {check, validationResult} = require("express-validator")
const User = require("../models/User")


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
        
        const {phone, street, city, state, zipcode, question1, question2, question3, answer1, answer2, answer3, email} = req. body
        const user = await User.findOne({email})
        const id = user.id
        console.log(id)
        let profile = new Profile({
            phone, street, city, state, zipcode, question1, question2, question3, answer1, answer2, answer3,  id
        })
        
        await profile.save()
        res.status(200).json(profile)

    } catch (error) {
        console.log(error)
        res.status(500).json({error: [{msg: "server error"}]})
    }
})