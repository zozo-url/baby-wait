const connection = require('./connection')

function getEmoji (db = connection) {
  return db('emoji').select()
}

module.exports = {
  getEmoji
}
