const Pool = require("pg").Pool

const client = new Pool({user: "academy",
password: "",
host: "localhost",
port: 5432,
database: "1rmbackend",});
client.connect();

module.exports = client;