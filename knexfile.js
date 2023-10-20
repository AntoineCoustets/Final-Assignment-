// Update with your config settings.


/**
* @type { Object.<string, import("knex").Knex.Config> }
*/


module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost:3306',
      user: 'root',
      password: 'caca',
      database: 'my_db'
    },
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};