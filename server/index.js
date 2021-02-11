/* eslint-disable no-console */
require('newrelic');
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT
});
pool.connect();

// server setup
const PORT = process.env.PORT || 3002;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/../public`));

// /Users/Taivnaa/Desktop/SSH/similar-products.pem
// ubuntu@ec2-54-219-179-166.us-west-1.compute.amazonaws.com 
// /Users/Taivnaa/Desktop/hack-reactor/SDC/similar-products/schema.sql 
// /Users/Taivnaa/Desktop/hack-reactor/SDC/similar-products/pictures.csv 
// /Users/Taivnaa/Desktop/hack-reactor/SDC/similar-products/products.csv 
// /Users/Taivnaa/Desktop/hack-reactor/SDC/similar-products/tags.csv 

// scp -i /Users/Taivnaa/Desktop/SSH/similar-products.pem /Users/Taivnaa/Desktop/hack-reactor/SDC/similar-products/pictures.csv ubuntu@ec2-54-219-179-166.us-west-1.compute.amazonaws.com:~/ 
// scp -i /Users/Taivnaa/Desktop/SSH/similar-products.pem /Users/Taivnaa/Desktop/hack-reactor/SDC/similar-products/products.csv  ubuntu@ec2-54-219-179-166.us-west-1.compute.amazonaws.com:~/ 
// scp -i /Users/Taivnaa/Desktop/SSH/similar-products.pem /Users/Taivnaa/Desktop/hack-reactor/SDC/similar-products/tags.csv  ubuntu@ec2-54-219-179-166.us-west-1.compute.amazonaws.com:~/ 

// return array of product objects that are similar to the specified product
app.get('/api/products/:productId',  (req, res) => {
const q = 'SELECT * FROM products INNER JOIN pictures ON products.product_id = pictures.product_id INNER JOIN tags ON products.product_id = tags.product_id LIMIT (21)';
  pool.query(q, (err, success) => {
    if (err) res.status(400).send(err);
    else res.status(200).send(success);
  });
});

// app.post('/api/products', (req, res) => {
//   const q = 'INSERT INTO products (product_name, num_pictures, num_tags, price) values (iphone, 2, 4, $400)';
//   const {
//     product_name,
//     num_pictures,
//     num_tags,
//     price
//   } = req.body;
//   pool.query(q, (err, success) => {
//     if (err) res.status(400).send(err);
//     else res.status(201).send(success);
//   });
// });


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
