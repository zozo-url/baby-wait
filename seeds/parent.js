
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('parent').del()
    .then(function () {
      // Inserts seed entries
      return knex('parent').insert([
        {id: 1, first_name: 'Devon', last_name: 'Longbottom', username: 'BigDog007', hash_password: 'bigdog', email: 'bigdogggottaeat@example.com'},
        {id: 2, first_name: 'Lucy', last_name: 'Mcgoose', username: 'isLoose353', hash_password: 'asagoose', email: 'lucymcloose@example.com'},
        {id: 3, first_name: 'Graeham', last_name: 'Grey', username: 'theGraeham', hash_password: 'mynameisbland', email: 'mynameisbland@example.com'}
      ]);
    });
};
