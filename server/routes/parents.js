const express = require("express");
const router = express.Router();

const db = require("../db/parents");

router.get('/ecc', (req, res) => {
    db.getEccList()
    .then(daycares => {
        res.json(daycares)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

router.delete('/child', (req, res) => {
    console.log(req.body)
    db.deleteChild(req.body.id)
    .then(child => {
        res.json(child)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

module.exports = router