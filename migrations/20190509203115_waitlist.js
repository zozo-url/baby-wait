
exports.up = function(knex, Promise) {
  return knex.schema.createTable('waitlist', table => {
      table.increments('id').primary
      table.integer('child_id')
      table.integer('ecc_id')
      table.string('status')
      table.integer('rank_ecc')
      table.integer('rank_parent')
      
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('waitlist')
};
