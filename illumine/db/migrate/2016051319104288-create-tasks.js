export function up(schema) {
  return schema.createTable('tasks', table => {
    table.increments('id');
    table.boolean('isComplete');
    table.string('title');
    table.integer('user_id');
    table.timestamps();

    table.index([
      'id',
      'user_id',
      'created_at',
      'updated_at'
    ]);
  });
}

export function down(schema) {
  return schema.dropTable('tasks');
}
