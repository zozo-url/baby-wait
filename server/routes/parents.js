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
    db.createChild(req.body)
    .then(child => {
        res.json(child)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

router.post('/addchildtowaitlist', (req, res) => {
    db.addChildToWaitList(req.body)
    .then(waitlist => {
        res.json(waitlist)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

router.post('/createparentuser', (req, res) => {
    db.createParentUser(req.body)
    .then(waitlist => {
        res.json(waitlist)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

router.delete('/deletechildfromwaitlist', (req, res) => {
    db.deleteChildFromWaitlist(req.body)
    .then(child => {
        res.json(child)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

router.get('/childwaitlist/:id', (req, res) => {
    //checkout this feature futher into the future
    db.getChildWaitlists(req.params.id)
    .then(waitlist => {
        res.json(waitlist)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})



module.exports = router