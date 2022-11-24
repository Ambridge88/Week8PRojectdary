const { Router } = require('express');
const atmRouter = Router()
const {Atm}  = require('../models')
const {Robber} = require('../models')
const robberNumber = 1

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

atmRouter.get("/:id/:cash", async (req,res) => {
    try {
    console.log("fetching specific ATM cash value");
    const showBalance = await Atm.findByPk(req.params.cash);
    res.status(200).send(showBalance)
    }
    catch (error) {
        res.send(error)
    }
})

atmRouter.put("/:id/grab", async (req,res) => {
    try {
    console.log("cash stolen!");
    const balance = await Atm.findByPk(req.params.id);
    const robber = await Robber.findByPk(1)
    const swag = await robber.update({cash: robber.cash + balance.cash})
    const atmEmptied = await balance.update({cash: 0})
    console.log("robber got swag!")
    res.send([ swag, atmEmptied])
    }
    catch (error) {
        res.send(error)
    }
})



module.exports = atmRouter