const express = require("express");
const router = express.Router();

const db = require("../db/ecc");

router.get('/waitlist', (req,res) => {
    db.getPendingChildren(req.body.id)
    .then(pending => {
        res.json(pending)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

module.exports = router