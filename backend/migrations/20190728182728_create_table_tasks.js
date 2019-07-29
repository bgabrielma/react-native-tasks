exports.up = function (knex) {
  return knex.schema.createTable('tasks', table => {
    table.increments('id').primary()
    table.string('desc').notNull()
    table.datetime('estimateAt')
    table.datetime('doneAt')
    table.integer('userId').unsigned().notNull().references('id').inTable('users')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('tasks')
}
