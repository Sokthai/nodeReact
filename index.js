const express = require("express")
const app = express()


app.get("/", (req, res) => {
    res.send({greeting: "welcome"})
})


let PORT = 8000

app.listen(PORT, (req, res) => {
    console.log(`Server start on. localhost:${PORT}`)
})
