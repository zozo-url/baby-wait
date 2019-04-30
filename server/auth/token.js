const jwt = require('jsonwebtoken')

module.exports = {
  issueToken
}

function issueToken (req, res) {
  res.json({
    ok: true,
    message: 'Authentication successful.',
    token: createToken(res.locals.userId)
  })
}

function createToken (id) {
  return jwt.sign({ id, message: 'Hi there' }, process.env.JWT_SECRET, { expiresIn: '1d' })
}
