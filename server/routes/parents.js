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

router.post('/createchild', (req, res) => {
    console.log('req.body: ', req.body)
    db.createChild(req.body)
    .then()
})

module.exports = router