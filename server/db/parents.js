const connection = require('./connection')

function getEccList (db = connection) {
    return db('ecc').select()
}

function deleteChild (id, db = connection) {
    return db('waitlist')
    .where('child_id', id)
    .del()
}

function getChildWaitlists (id, db = connection) {
    // return db.select('*').from('parent').join('child', function() {
    //     this.on(id, '=', 'child.parent_id')
    //     .andOn( 'child.id', '=', 'waitlist.child_id').andOn('ecc_id', '=', 'id')
    // })
    return db('parent').where('parent.id', id)
    .join('child', 'parent.id', '=', 'parent_id')
    .join('waitlist', 'child_id', '=', 'waitlist.child_id')
    .join('ecc', 'ecc_id', '=', 'ecc.id')
    .select('child.first_name', 'waitlist.status', 'waitlist.rank_ecc', 'waitlist.rank_parent', 'ecc.center_name')
    
}
module.exports = {
    getEccList,
    deleteChild,
    getChildWaitlists
}