DROP DATABASE IF EXISTS similarproducts;
CREATE DATABASE similarproducts;

\c similarproducts;

CREATE TABLE products (
  product_id serial PRIMARY KEY,
  product_name varchar(60),
  num_pictures int,
  num_tags int,
  price decimal
);

COPY products (product_name, num_pictures, num_tags, price) 
FROM '/Users/Taivnaa/Desktop/hack-reactor/SDC/similar-products/database/products.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE pictures (
  pictureId serial PRIMARY KEY,
  color varchar(60),
  img varchar(60),
  product_id int,
  FOREIGN KEY (product_id)
    REFERENCES products (product_id)
);

CREATE INDEX ON pictures (product_id);

COPY pictures (color, img, product_id)
FROM '/Users/Taivnaa/Desktop/hack-reactor/SDC/similar-products/database/pictures.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE tags (
  tagId serial PRIMARY KEY,
  tag varchar(30),
  product_id int,
  FOREIGN KEY (product_id)
    REFERENCES products (product_id)
);

CREATE INDEX ON tags (product_id);

COPY tags (tag, product_id)
FROM '/Users/Taivnaa/Desktop/hack-reactor/SDC/similar-products/database/tags.csv'
DELIMITER ','
CSV HEADER;