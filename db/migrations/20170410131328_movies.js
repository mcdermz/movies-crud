
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', (table) => {
    table.increments();
    table.string('title').notNullable().defaultTo('');
    table.string('director').notNullable().defaultTo('');
    table.integer('year').notNullable();
    table.text('poster_url').notNullable().defaultTo('');
    table.integer('my_rating').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies');
};
