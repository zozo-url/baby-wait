const connection = require('./connection')

function getEccList (db = connection) {
    return db('ecc').select()
}

function deleteChild (id, db = connection) {
    return db('waitlist')
    .where('child_id', id)
    .del()
}
module.exports = {
    getEccList,
    deleteChild
}