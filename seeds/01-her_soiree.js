const her_soirees = require('../her_soirees');
exports.seed = function(knex, Promise) {
  return knex('her_soiree').del()
    .then(function () {
      return knex('her_soiree').insert(her_soirees);
    });
};
