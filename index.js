const express = require("express")
const app = express()
const dbConnect = require("./config/db")


dbConnect()

app.get("/", (req, res) => {
    res.send({greeting: "welcome"})
})


let PORT = 8000

app.listen(PORT, (req, res) => {
    console.log(`Server start on. localhost:${PORT}`)
})
