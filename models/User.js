const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    avatar:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    dataOfBirth:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: date()
    }
})

module.exports = mongoose.model("user", UserSchema)