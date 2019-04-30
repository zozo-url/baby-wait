const express = require('express')
const emojiRoutes = require('./routes/emoji')
const authRoutes = require('./routes/auth')

const server = express()

// JSON API middleware
server.use(express.json())

// Static file serving middleware
server.use(express.static('./public'))

// Add emoji routes, starting at /api/emoji
server.use('/api/emoji', emojiRoutes)

// POST /api/v1/auth/register
server.use('/api/v1/auth', authRoutes)

module.exports = server
