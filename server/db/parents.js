const connection = require('./connection')

function getEccList (db = connection) {
    return db('ecc').select()
}

module.exports = {
    getEccList
}