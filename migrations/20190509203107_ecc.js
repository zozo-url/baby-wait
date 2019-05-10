
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ecc', table => {
        table.increments('id').primary
        table.string('center_name')
        table.string('ph_number').unique
        table.string('url')
        table.string('email').unique
        table.string('address')
        table.string('suburb')
        table.string('description')
        table.string('age')
        table.string('photo')
        table.string('username').unique
        table.string('hash_password')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('ecc')
};
