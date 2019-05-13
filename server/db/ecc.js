const connection = require('./connection')

function getPendingChildren (id, db = connection) {
    return db('ecc').where('ecc.id', id)
        .join('waitlist', 'ecc.id', '=', 'waitlist.ecc_id')
        .join('child', 'child_id', '=', 'child.id')
        .where('waitlist.status', 'pending')
        .select('ecc.center_name', 'waitlist.status', 'waitlist.rank_ecc', 'child.first_name', 'child.last_name')
}
function getWaitlistChildren (id, db = connection) {
    return db('ecc').where('ecc.id', id)
        .join('waitlist', 'ecc.id', '=', 'waitlist.ecc_id')
        .join('child', 'child_id', '=', 'child.id')
        .where('waitlist.status', 'waitlist')
        .join('parent','parent_id', '=', 'parent.id')
        .select('ecc.center_name', 'waitlist.status as child_status', 'waitlist.rank_ecc as child_rank', 'child.first_name as child_first_name', 'child.last_name as child_last_name', 'parent.first_name as parent_first_name', 'parent.last_name as parent_last_name', 'parent.email as parent_email')
}

module.exports = {
    getPendingChildren,
    getWaitlistChildren
}