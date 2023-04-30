const mongoose = require("mongoose")
// const config = require("config")
const keys = require("./keys")



let dbConnect = async () =>{
    try {
        await mongoose.connect(keys.mongooseURI, {
            useNewUrlParser: true
        })
        console.log("Mongoose connected...")
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

module.exports = dbConnect