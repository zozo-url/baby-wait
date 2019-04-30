const connection = require('./connection')
const { generateHash } = require('../auth/hash')

function userExists (username, db = connection) {
  // SELECT count(*) FROM users where username = ?
  return db('users')
    .where('username', username)
    .count()
    .then(countData => {
      console.log(countData, countData[0]['count(*)'], countData[0]['count(*)'] > 0)
      return countData
    })
    .then(countData => countData[0]['count(*)'] > 0)
}

function findUserByUsername (username, db = connection) {
  // SELECT * FROM users where username = ?
  return db('users')
    .where('username', username)
    .select()
    .first()
}

function createUser (user, db = connection) {
  return generateHash(user.password)
    .then(passwordHash => {
      const dbUser = {
        username: user.username,
        password_hash: passwordHash
      }

      return db('users')
        .insert(dbUser)
        // .then(([id]) => id) // ---> Destructuring an array
        .then(ids => ids[0])
    })
}

module.exports = {
  findUserByUsername,
  createUser,
  userExists
}
