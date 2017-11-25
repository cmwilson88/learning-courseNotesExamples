
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {title: 'Do laundry', user_id: 1},
        {title: 'Go to the gym', user_id: 2},
        {title: 'Study Knex', user_id: 2},
        {title: 'Work on another project', user_id: 3},
        {title: 'Refactor code', user_id: 3},
        {title: 'Schedule Doctor appointment', user_id: 3}
      ]);
    });
};
