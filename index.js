const express = require("express")
const app = express()
const dbConnect = require("./config/db")
const cors = require('cors')


app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['PUT', 'GET', 'DELETE']
}))

dbConnect()
app.use(express.json({extended: false}));

app.get("/", (req, res) => {
    res.send({greeting: "welcome"})
})

app.use('/users', require("./routers/users"))
app.use('/profile', require("./routers/profile"))


let PORT = 8010

app.listen(PORT, (req, res) => {
    console.log(`Server start on. localhost:${PORT}`)
})
//645131cfd1ecb17f512f23b0