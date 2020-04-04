const db = require('./dbconfig');

const setupTable = async () => {

    const dropTable = `DROP TABLE IF EXISTS todo;`

    const createTable = 
    `CREATE TABLE IF NOT EXISTS todo(
        id Serial PRIMARY KEY,
        title VARCHAR (50) UNIQUE NOT NULL,
        is_done BOOLEAN
    );`

    await db.raw(dropTable)
    await db.raw(createTable)
}

module.exports = setupTable;

