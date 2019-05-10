
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('child').del()
    .then(function () {
      // Inserts seed entries
      return knex('child').insert([
        {id: 1, first_name: 'John1', last_name: 'smith', date_of_birth: '10/05/2018', parent_id: 0 },
        {id: 2, first_name: 'Abi2',last_name: 'lodo', date_of_birth: '2/3/2019', parent_id: 1 },
        {id: 3, first_name: 'sarah3',last_name: 'wiseman', date_of_birth: '1/3/2019', parent_id: 2 }
      ]);
    });
};
