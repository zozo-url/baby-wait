
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('waitlist').del()
    .then(function () {
      // Inserts seed entries
      return knex('waitlist').insert([
        {id: 1, child_id: 1, ecc_id: 1, status: 'unconfirmed', rank_ecc: 1, rank_parent: 1}
      ]);
    });
};
