const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
  user : {
    type: mongoose.Schema.Types.ObjectId,
    rel: "user"
  },
  phone: {
    type: String,
    required: false
  },
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zipcode: {
    type: String,
    required: true
  },
  question: {
    question1 :{
        type: String,
        required: true
    },
    question2 :{
        type: String,
        required: true
    },
    question3 :{
        type: String,
        required: true
    } 
  },
  answer: {
    answer1: {
        type: String,
        required: true
    },
    answer2: {
        type: String,
        required: true
    },
    answer3: {
        type: String,
        required: true
    }
  }
})


module.exports = mongoose.model("profile", profileSchema)