const bcrypt = require('bcrypt')

//generatePasswordHash
function generatePasswordHash (newPassword) {
    //password = user password, 12 = saltRounds 
    return bcrypt.hash(newPassword, 12)
}
//comparePasswordToHash
function comparePasswordToHash (newPassword, dbPassword,) {
    //hash == password in database?/
    console.log(newPassword, dbPassword)
    return bcrypt.compare(newPassword, dbPassword)
}

module.exports = {
    generatePasswordHash,
    comparePasswordToHash
}