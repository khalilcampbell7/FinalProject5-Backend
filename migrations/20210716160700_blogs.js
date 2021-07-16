
exports.up = function(knex) {
  return knex.schema.createTable('blogs', table => {
    table.increments('blog_id'); // adds an auto incrementing PK column
    table.string('title');
    table.string('author');
    table.string('image_url');
    table.string('location');
    table.string('content');
    table.timestamps(true, true); // adds created_at and updated_at
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('blogs');
  
};
