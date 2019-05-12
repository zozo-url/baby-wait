
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('waitlist').del()
    .then(function () {
      // Inserts seed entries
      return knex('waitlist').insert([
        {id: 1, child_id: 1, ecc_id: 1, status: 'pending', rank_ecc: 1, rank_parent: 1},
        {id: 2, child_id: 2, ecc_id: 2, status: 'waitlist', rank_ecc: 1, rank_parent: 3},
        {id: 3, child_id: 2, ecc_id: 1, status: 'waitlist', rank_ecc: 1, rank_parent: 2}
      ]);
    });
};
