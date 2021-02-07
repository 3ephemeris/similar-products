const { Client } = require('pg');

const client = new Client({
  user: 'root',
  password: '',
  host: 'localhost',
  port: 8080,
  database: 'similarProducts',
});

client.connect()
  .then(() => console.log('Postgresql connected'))
  .catch((err) => console.log(err));

module.exports.connection = client;

// pg_ctl -D /usr/local/var/postgres start