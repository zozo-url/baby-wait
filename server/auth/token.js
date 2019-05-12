const jwt = require("jsonwebtoken")
const { getParentByUsername } = require('../db/parents')
const verifyJwt = require("express-jwt")
const { comparePasswordToHash } = require("./hash")

module.exports = {
    issueToken,
    verifyToken
}

function issueToken (req, res) {
    const parent = req.body
    getParentByUsername(req.body.username)
    .then(parent => {
        if (!parent) {
            res.status(403).json({ message: "User does not exist" })
        }
        else {
            comparePasswordToHash(req.body.password, parent[0].hash_password)
            .then(match => {
                if(!match) {
                    res.status(400).json({
                        message: "Password is incorrect" 
                    }) 
                }
                else {
                    const token = createToken(parent, process.env.JWT_SECRET)
                    res.json({
                        message: "Authentication successful",
                        token
                    })
                }
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ message: err.message })
            })
        }
    })
}

function createToken(parent, secret) {
    const parentUser = {
        parentId: parent.id,
        username: parent.username
    }
    const options = {
        expiresIn: "24h"
    }

    return jwt.sign(parentUser, secret, options)
}

function verifyToken(req, res, next) {
    verifyJwt({ secret: process.env.JWT_secret, credentialsRequired: true}) (
        req,
        res,
        next
    )
}