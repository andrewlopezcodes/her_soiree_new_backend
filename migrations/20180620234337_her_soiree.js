
exports.up = function(knex, Promise) {
  return knex.schema.createTable('her_soiree', (table) => {
    table.increments();
    table.string('title', 128).notNullable;
    table.string('organizer_name', 128);
    table.string('organizer_website_url').notNullable;
    table.string('event_type', 64).notNullable;
    table.string('event_topic', 64).notNullable;
    table.text('description').notNullable;
    table.string('venue_name', 64).notNullable;
    table.string('street_address', 128).notNullable;
    table.string('city', 64).notNullable;
    table.string('state', 2).notNullable;
    table.string('zipcode', 10).notNullable;
    table.string('participant_age', 20);
    table.timestamp('event_start_time').notNullable;
    table.timestamp('event_finish_time').notNullable;
    table.string('event_frequency', 20);
    table.string('dress_code', 64);
    table.float('event_price', 9, 2).notNullable;
    table.text('event_flyer_url').notNullable;
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('her_soiree');
};
