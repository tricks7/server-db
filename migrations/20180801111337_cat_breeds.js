
exports.up = function (knex, Promise) {
return knex.schema.createTable('cat_breeds', (table) => {
    table.increments()
    table.text('breed')
    table.integer('popularity')
})
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('cat_breeds')
};
