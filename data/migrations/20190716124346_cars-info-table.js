
exports.up = function(knex) {
    // we make changes to the db schema
    return knex.schema.createTable('cars', tbl => {
      tbl.increments();

      tbl.integer('VIN', 3).unique().notNullable();
      tbl.string('make').notNullable();
      tbl.string('model').notNullable();
      tbl.integer("mileage").notNullable();
    });
  };
  
  exports.down = function(knex) {
    // we undo the changes to the db schema
    return knex.schema.dropTableIfExists('cars');
  };
