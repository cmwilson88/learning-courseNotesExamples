
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, title: 'Do laundry', user_id: 1},
        {id: 2, title: 'Go to the gym', user_id: 2},
        {id: 3, title: 'Study Knex', user_id: 2},
        {id: 4, title: 'Work on another project', user_id: 3},
        {id: 5, title: 'Refactor code', user_id: 3},
        {id: 6, title: 'Schedule Doctor appointment', user_id: 3}
      ]);
    });
};
