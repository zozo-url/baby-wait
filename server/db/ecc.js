const connection = require('./connection')

function getPendingChildren (id, db = connection) {
    console.log(id)
    return db('ecc').where('ecc.id', id)
        .join('waitlist', 'ecc.id', '=', 'waitlist.ecc_id')
        .join('child', 'child_id', '=', 'child.id')
        .where('waitlist.status', 'pending')
        .select()
}

module.exports = {
    getPendingChildren
}