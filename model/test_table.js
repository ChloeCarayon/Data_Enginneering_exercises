const db = require("../db");


!async function createTable() {
    const tableQuery = `CREATE TABLE IF NOT EXISTS test (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(255))`;

    await db.query(tableQuery);
}();

exports.findAll = async function () {
    const results = await db.query("SELECT * FROM test");
    return results[0];
}

exports.create = async function (name, description) {
    await db.query("INSERT INTO test(name, description) VALUES (?, ?)", [name, description]);
}