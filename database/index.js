const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE
});

client.connect()
  .then(() => console.log('Postgresql connected'))
  .catch((err) => console.log(err));

module.exports.connection = client;

// pg_ctl -D /usr/local/var/postgres start