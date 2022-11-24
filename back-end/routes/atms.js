const { Router } = require('express');
const atmRouter = Router()
const Atm  = require('../models/atm')


atmRouter.get("/", async (req,res) => {
    try {
    console.log("fetching all ATMs");
    const fetchATMs = await Atm.findAll();
    res.status(200).send(fetchATMs)
    }
    catch (error) {
        res.send(error)
    }
})

atmRouter.get("/:id", async (req,res) => {
    try {
    console.log("fetching specific ATM");
    const fetchATM = await Atm.findByPk(req.params.id);
    res.status(200).send(fetchATM)
    }
    catch (error) {
        res.send(error)
    }
})

module.exports = atmRouter