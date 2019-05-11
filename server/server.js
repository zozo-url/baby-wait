const express = require('express')

const server = express()

const parents = require('./routes/parents')

// JSON API middleware
server.use(express.json())

// Static file serving middleware
server.use(express.static('./public'))
server.use('/v1/parents', parents)

module.exports = server
