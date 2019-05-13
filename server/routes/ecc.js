const express = require("express");
const router = express.Router();

const db = require("../db/ecc");

//auth
router.post('/createuserecc', (req, res, next) => {
    const ecc = req.body
    db.EccUserExists(ecc)
        .then(exists => {
            if (exists) return res.status(400).send({
                message: "User Name Taken"
            })
        db.createEccUser(ecc)
            .then(([newEccId]) => {
                res.locals.eccId = newEccId
                next()
            })
            .catch(err => {
                res.status(500).send(err.message)
            })        
        })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

//

router.get('/pending', (req,res) => {
    db.getPendingChildren(req.body.id)
    .then(pending => {
        res.json(pending)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})
router.get('/waitlist', (req,res) => {
    db.getWaitlistChildren(req.body.id)
    .then(pending => {
        res.json(pending)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

module.exports = router