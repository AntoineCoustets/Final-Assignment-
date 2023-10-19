/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('product', function(table) {
    table.increments('id').primary();
    table.string('name');
    table.string('price');
    table.string('description');
    table.string('gender');
    table.string('type');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('product');
};
