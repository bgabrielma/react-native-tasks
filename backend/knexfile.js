// Update with your config settings.

module.exports = {
  client: 'mysql2',
  connection: {
    database: 'tasks_database',
    user: 'root',
    password: ''
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}
