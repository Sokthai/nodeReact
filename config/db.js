const mongoose = require("mongoose")
const config = require("config")
const keys = config.get("./keys")



let dbConnect = async () =>{
    try {
        await mongoose.connect(dbURI)
        console.log("Mongoose connected...")
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

module.exports = dbConnect