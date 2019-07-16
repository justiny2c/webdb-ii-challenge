const express = require('express');

const db = require('../data/db-config.js');

const router = express.Router();

router.get("/", (req, res) => {
    db("cars")
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

router.post("/", (req, res) => {
    const car = req.body

    db("cars")
    .insert(car)
    .then(car => {
        res.status(200).json(car)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

module.exports = router;