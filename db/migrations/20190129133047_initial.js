exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('venues', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('address');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('concerts', function(table) {
      table.increments('id').primary();
      table.string('band');
      table.string('date');
      table.integer('venue_id').unsigned()
      table.foreign('venue_id')
        .references('venues.id');

      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('concerts'),
    knex.schema.dropTable('venues')
  ]);
};
