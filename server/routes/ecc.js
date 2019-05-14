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

router.get('/pending/:id', (req,res) => {
    db.getPendingChildren(req.params.id)
    .then(pending => {
        res.json(pending)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})
router.get('/waitlist/:id', (req,res) => {
    db.getWaitlistChildren(req.params.id)
    .then(waitlist => {
        res.json(waitlist)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

router.post('/updatechild/:id', (req,res) => {
    db.updateChildStatusToWaitlist(req.params.id)
    .then(update => {
        res.json(update)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

router.post('/deletechildfromwaitlist/:childId/:eccId', (req, res) => {
    db.deleteChildFromWaitlist(req.params.childId, req.params.eccId)
    .then(child => {
        res.json(child)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

// router.post('/updateeccuser', (req,res) => {
//     db.updateEccUser(req.body)
//     .then(update => {
//         res.json(update)
//     })
//     .catch(err => {
//         res.status(500).send(err.message)
//     })
// })

module.exports = router