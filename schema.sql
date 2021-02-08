DROP DATABASE IF EXISTS similarProducts;
CREATE DATABASE similarProducts;

\c similarProducts;

DROP TABLE IF EXISTS product;

CREATE TABLE product (
  product_id serial PRIMARY KEY,
  product_name varchar(60),
  numPictures int,
  numTags int,
  price decimal
)

COPY product (product_name, numPictures, numTags, price)
FROM '/Users/Taivnaa/Desktop/hack-reactor/SDC/similar-products/products.csv'
DELIMITER ','
CSV HEADER;

DROP TABLE IF EXISTS pictures;

CREATE TABLE pictures (
  pictureId serial PRIMARY KEY,
  color varchar(60),
  img varchar(60),
  product_id int
  FOREIGN KEY (product_id)
    REFERENCES product (product_id)
)

COPY pictures (color, img, product_id)
FROM '/Users/Taivnaa/Desktop/hack-reactor/SDC/similar-products/pictures.csv'
DELIMITER ','
CSV HEADER;

DROP TABLE IF EXISTS tags;

CREATE TABLE tags (
  tagId serial PRIMARY KEY,
  tag varchar(30),
  product_id int
  FOREIGN KEY (product_id)
    REFERENCES product (product_id)
)

COPY tags (tag, product_id)
FROM '/Users/Taivnaa/Desktop/hack-reactor/SDC/similar-products/tags.csv'
DELIMITER ','
CSV HEADER;