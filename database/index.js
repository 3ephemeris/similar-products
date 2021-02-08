const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE
});

client.connect()
  .then(() => console.log('Postgresql connected'))
  .catch((err) => console.log(err));

module.exports.connection = client;

// pg_ctl -D /usr/local/var/postgres start