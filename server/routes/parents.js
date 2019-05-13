const express = require("express");
const router = express.Router();

const db = require("../db/parents");
const token = require("../auth/token")

router.get('/ecc', (req, res) => {
    db.getEccList()
    .then(daycares => {
        res.json(daycares)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

// auth
router.get('/getparentbyusername', (req, res) => {
    db.getParentByUsername(req.body.username)
    .then(parent => {
        res.json(parent)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

router.post('/createparentuser', (req, res, next) => {
    const parent = req.body
    db.parentUserExists(parent)
        .then(exists => {
            if (exists) return res.status(400).send({
                message: "User Name Taken"
            })
        db.createParentUser(parent)
            .then(([newParentId]) => {
                res.locals.parentId = newParentId
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

router.post('/login', token.issueToken)
//

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