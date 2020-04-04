const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    database: 'todo_db',
    user : 'postgres',
    password :'mysecretpassword'
  }
})

module.exports = knex;
