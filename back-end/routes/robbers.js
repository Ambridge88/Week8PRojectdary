const { Router } = require('express');
const robberRouter = Router()
const {Robber}  = require('../models')


robberRouter.get("/", async (req,res) => {
    try {
    console.log("fetching all robbers");
    const fetchRobbers = await Robber.findAll();
    res.status(200).send(fetchRobbers)
    }
    catch (error) {
        res.send(error)
    }
})

robberRouter.get("/:id", async (req,res) => {
    try {
    console.log("fetching specific copper");
    const fetchRobber = await Robber.findByPk(req.params.id);
    res.status(200).send(fetchRobber)
    }
    catch (error) {
        res.send(error)
    }
})

module.exports = robberRouter