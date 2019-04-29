const express = require('express')
const db = require('../db/emoji')

// Set up this file as a stand alone router 
const router = express.Router()

router.get('/', (req, res) => {
  db.getEmoji()
    .then(emoji => {
      res.json(emoji)
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.setStatus(500).json({ error: 'Something is broken' })
    })
})

module.exports = router
