exports.up = function(knex) {
    return knex.schema.createTable('species', t => {
        t.increments(); 

        t.string('name', 255).notNullable();
    })
    .createTable('animals', t => {
        t.increments();
        t.string('name', 255).notNullable();


        t
        .integer('species_id')
        .unsigned()
        .references('id')
        .inTable('species')
        .onDelete('RESTRICT') 
        .onUpdate('CASCADE') 
    })
    .createTable('zoos', t => {
        t.increments();
        t.string('name', 255).notNullable();
        t.string('address', 255);
    })

    .createTable('animal_zoos', t => {
        t.increments();
        t.string('to', 255)
        t.string('from', 255).notNullable();

        t
        .integer('zoo_id')
        .unsigned()
        .references('id')
        .inTable('zoos')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

        t
        .integer('animal_id')
        .unsigned()
        .references('id')
        .inTable('animals')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')     
    })
};

exports.down = function(knex) {
    
};