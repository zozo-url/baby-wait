
exports.up = function(knex, Promise) {
  return knex.schema.createTable('parent', table => {
      table.increments('id').primary
      table.string('first_name')
      table.string('last_name')
      table.string('username').unique
      table.string('hash_password')
      table.string('email').unique
   })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('parent')
};
