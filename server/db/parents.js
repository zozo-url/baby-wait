const connection = require('./connection')

function getEccList (db = connection) {
    return db('ecc').select()
}

function createChild (newChildInfo, db = connection) {
    console.log('newChildInfo: ', newChildInfo) 
    return db('child')
        .insert(newChildInfo)
        // .insert({
        //     date: newChildInfo.date
        //     mood:
        //     external:
        //     journal:
        // })
}

module.exports = {
    getEccList,
    createChild
}