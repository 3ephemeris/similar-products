CREATE DATABASE IF NOT EXISTS similarProducts;

use similarProducts;

DROP TABLE IF EXISTS product;

CREATE TABLE product (
  product_id serial PRIMARY KEY,
  product_name varchar(50),
  price int
)

DROP TABLE IF EXISTS pictures;

CREATE TABLE pictures (
  pictureId serial PRIMARY KEY
  color varchar(50),
  img varchar(50)
  product_id int
  FOREIGN KEY (product_id)
    REFERENCES product (product_id)
)

DROP TABLE IF EXISTS tags;

CREATE TABLE tags (
  tagId serial PRIMARY KEY
  tag varchar(50),
  product_id int
  FOREIGN KEY (product_id)
    REFERENCES product (product_id)
)