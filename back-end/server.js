const express = require('express');
const cors = require('cors')
const app = express()
const port = 5001;
const seed = require('./db/seed')
const Atm = require('./models/atm')
const atmRouter = require('./routes/atms')

app.use(cors())
app.use(express.json())


app.use("/atms", atmRouter)


app.listen(port, () => {
    seed()
    console.log(`server is live at http://localhost:${port}`)
})