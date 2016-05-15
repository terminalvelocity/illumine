export function up(schema) {
  return schema.createTable('users', table => {
    table.increments('id');
    table.string('name');
    table.string('email');
    table.boolean('newsletter');
    table.timestamps();

    table.index([
      'id',
      'created_at',
      'updated_at'
    ]);
  });
}

export function down(schema) {
  return schema.dropTable('users');
}
