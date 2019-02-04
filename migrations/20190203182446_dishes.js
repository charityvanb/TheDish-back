
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', (dishes) =>{
  dishes.increments('id')
  dishes.string('url')
  dishes.boolean('real')
  dishes.string('uploader')
  })
}


exports.down = function(knex, Promise) {
  
};
