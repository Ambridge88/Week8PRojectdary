const express = require('express');
const cors = require('cors')
const app = express()
const port = 5001;
const seed = require('./db/seed')
const atmRouter = require('./routes/atms')
const copperRouter = require('./routes/coppers')
const robberRouter = require('./routes/robbers')

app.use(cors())
app.use(express.json())


app.use("/atms", atmRouter);
app.use("/coppers", copperRouter);
app.use("/robbers", robberRouter)


app.listen(port, () => {
    seed()
    console.log(`server is live at http://localhost:${port}`)
})