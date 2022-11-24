const { Router } = require('express');
const copperRouter = Router()
const {Copper}  = require('../models')


copperRouter.get("/", async (req,res) => {
    try {
    console.log("fetching all coppers");
    const fetchCoppers = await Copper.findAll();
    res.status(200).send(fetchCoppers)
    }
    catch (error) {
        res.send(error)
    }
})

copperRouter.get("/:id", async (req,res) => {
    try {
    console.log("fetching specific copper");
    const fetchCopper = await Copper.findByPk(req.params.id);
    res.status(200).send(fetchCopper)
    }
    catch (error) {
        res.send(error)
    }
})

module.exports = copperRouter