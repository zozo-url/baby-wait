const knex = require('knex')
const config = require('../../knexfile')

// Work out what environment we are in e.g. development vs test
const environment = process.env.NODE_ENV || 'development'

// Connect to the database using the envionment-specific config
const connection = knex(config[environment])

module.exports = connection
