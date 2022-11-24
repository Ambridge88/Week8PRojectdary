const express = require('express');
const cors = require('corse')
const app = express()
const port = 5001;
const seed = require('./db/seed')

app.use(cors())
app.use(express.json())
app.use("/")

app.get("/", (req,res) => {
    console.log("getting");
    res.send({})
})

app.post("/", (req, res) => {
    console.log("posting")
    res.send({ })
})

app.listen(port => {
    seed()
    console.log(`server is live at http://localhost:${port}`)
})