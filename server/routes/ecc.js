const express = require("express");
const router = express.Router();
const db = require("../db/ecc");
const token = require("../auth/token")

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
//this isn't working
router.post('/login', token.issueEccToken)
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

router.get('/updatechild', (req,res) => {
    db.updateChildStatus(req.body.id)
    .then(update => {
        res.json(update)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

module.exports = router