const express = require('express')
const verifyJwt = require('express-jwt')

const db = require('../db/users')
const { issueToken } = require('../auth/token')

const router = express.Router()

router.get('/secrets', verifyJwt({ secret: process.env.JWT_SECRET }), (req, res) => {
  console.log('token details: ', req.user)

  res.send('ALLL the sercrefjndnets!!!' + "\n" + req.user.message + ', ' + req.user.id)
})

// POST /api/v1/auth/register
router.post('/register', register, issueToken)

function register (req, res, next) {
  // const username = req.body.username
  // const password = req.body.password
  // ^--- is the same as ---\/
  const { username, password } = req.body

  //  If the username is already taken, send back a status 400 and this JSON object: {ok: false, message}.
  // If the username is available, add the user and respond with a status 201 and this JSON object: {ok: true}.
  // If there is an error, respond with a status 500 and this JSON object: {ok: false, message: 'Unknown error.'}.
  db.userExists(username)
    .then(userExists => {
      if (userExists) {
        res.json({ ok: false, message: 'User exists, sorry :(' }, 400)
      } else {
        db.createUser({ username: username, password: password })
          .then(userId => {
            res.locals.userId = userId
            next()
          })
          .catch(err => {
            // eslint-disable-next-line no-console
            console.error(err)
            res.json({ ok: false, message: 'Unknown error.' }, 500)
          })
      }
    })
}

// Middleware chain example

// router.get('/register', partOne, (req, res, next) => {
//   console.log('part 2')
//   res.locals.log.push('hi from part 2')
//   next()
// }, (req, res) => {
//   console.log('part 3')
//   res.locals.log.push('hi from part 3')

//   res.locals.log.forEach(l => console.log('message: ', l))

//   res.send('OK!')
// })

// function partOne(req, res, next) {
//   console.log('part 1')
//   res.locals.log = []
//   res.locals.log.push('hi from part 1')
//   next()
// }


module.exports = router
