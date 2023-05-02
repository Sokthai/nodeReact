const express = require("express")
const app = express()
const dbConnect = require("./config/db")

dbConnect()
app.use(express.json({extended: false}));

app.get("/", (req, res) => {
    res.send({greeting: "welcome"})
})

app.use('/users', require("./routers/users"))
app.use('/profile', require("./routers/users"))


let PORT = 8010

app.listen(PORT, (req, res) => {
    console.log(`Server start on. localhost:${PORT}`)
})
