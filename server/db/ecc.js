const connection = require('./connection')

function getPendingChildren (id, db = connection) {
    //add parent table to this somehow
    return db('ecc').where('ecc.id', id)
        .join('waitlist', 'ecc.id', '=', 'waitlist.ecc_id')
        .join('child', 'child_id', '=', 'child.id')
        .where('waitlist.status', 'pending')
        .select('ecc.center_name', 'waitlist.rank_ecc', 'child.first_name', 'child.last_name')
}

module.exports = {
    getPendingChildren
}