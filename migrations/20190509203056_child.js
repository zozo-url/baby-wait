
exports.up = function(knex, Promise) {
  return knex.schema.createTable('child', table => {
      table.increments('id').primary
      table.string('first_name')
      table.string('last_name')
      table.string('date_of_birth')
      table.integer('parent_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('child')
};
