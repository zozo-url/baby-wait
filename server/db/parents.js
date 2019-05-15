const connection = require('./connection')
const {generatePasswordHash} = require('../auth/hash')

function getEccList (db = connection) {
    return db('ecc').select()
}

function createChild (newChildInfo, db = connection) {
    console.log('newChildInfo: ', newChildInfo) 
    return db('child')
        .insert(newChildInfo)
}

//auth functions
function createParentUser (newParentUser, db = connection) {
    return generatePasswordHash(newParentUser.password)
    .then (hash => {
        return db('parent')
        .insert({
            'first_name': newParentUser.first_name,
            'last_name': newParentUser.last_name,
            'username': newParentUser.username,
            'hash_password': hash,
            'email': newParentUser.email
        })
    })
}

function getParentByUsername (username, db = connection) {
    return db('parent')
      .where('username', username)
      .select()
      .first()
  }

function parentUserExists (parent, db = connection) {
    console.log(parent)
    return db('parent')
      .where('username', parent.username)
      .then(parentUsers => parentUsers.length > 0)
}
//


function addChildToWaitList (newChildWaitlistInfo, db = connection) {
    return db('waitlist')
        .insert(newChildWaitlistInfo)
}

function getChildByParentId (parentId, db = connection) {
    return db('child')
      .where('parent_id', parentId)
      .select('child.id', 'child.first_name')
}


function deleteChildFromWaitlist (childAndEccId, db = connection) {
    return db('waitlist')
    .where('child_id', childAndEccId.ChildId)
    .andWhere('ecc_id', childAndEccId.EccId)
    .del()
}
// rank_parent is easily changed, need to make unique


function getChildWaitlists (id, db = connection) {
    return db('parent').where('parent.id', id)
    .join('child', 'child.parent_id', '=', 'parent.id')
    .leftOuterJoin('waitlist', 'child_id', '=', 'waitlist.child_id')
    .leftOuterJoin('ecc', 'waitlist.ecc_id', '=', 'ecc.id')
    .select('child.first_name', 'waitlist.child_id', 'waitlist.ecc_id', 'waitlist.status', 'waitlist.rank_ecc', 'waitlist.rank_parent', 'ecc.center_name')
}

var parent = [
{
    child1: {
        id: '',
        first_name: '',
        waitlists: {
            ecc1: {
                id: '',
                center_name: '',
                child1_rank: '',
            },
            ecc2: {
                id: '',
                center_name: '',
                child1_rank: '',
            }
        }
    }
},
{
    child2: {
        id: '',
        first_name: '',
        waitlists: {
            ecc1: {
                id: '',
                center_name: '',
                child2_rank: '',
            },
            ecc2: {
                id: '',
                center_name: '',
                child2_rank: '',
            }
        }
    }
}
]



module.exports = {
    getEccList,
    createParentUser,
    getParentByUsername,
    parentUserExists,
    createChild,
    addChildToWaitList,
    deleteChildFromWaitlist,
    getChildWaitlists,
    getChildByParentId
}