const express = require('express');

const db = require('../data/db-config.js');

const router = express.Router();

router.get("/", (req, res) => {
    db("cars")
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(error => {
        res.status(500).json({ message: 'Failed to retrieve fruit' })
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
        res.status(500).json({ message: 'Failed to store data' })
    })
})

router.delete('/:id', (req, res) => {
    db("cars")
    .where({ id: req.params.id})
    .del()
    .then(count => {
        res.status(200).json({ message: `${count} record(s) deleted`})
    })
    .catch(error => {
        res.status(500).json(error)    
    })
});

router.put('/:id', (req, res) => {
    db("cars")
    .where({ id: req.params.id })
    .update(req.body)
    .then(count => {
        if (count>0){
        res.status(200).json({ message: `${count} record(s) updated`})
        } else {
            res.status(404).json({ message: "ID does not exist"})
        }
    })
    .catch(error => {
        res.status(500).json(error)
    })
});

module.exports = router;