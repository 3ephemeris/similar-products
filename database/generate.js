const faker = require('faker');
const fs = require('fs');

const writeProducts = fs.createWriteStream('products.csv');
writeProducts.write('product_name,numPictures,numTags,price\n', 'utf8');

const writePictures = fs.createWriteStream('pictures.csv');
writePictures.write('color,img,product_id\n', 'utf8');

const writeTags = fs.createWriteStream('tags.csv');
writeTags.write('tag,product_id\n', 'utf8');

const generateProduct = () => {
  let product_name = faker.commerce.productName();
  let numPictures = Math.floor(Math.random() * (5) + 1);
  let numTags = Math.floor(Math.random() * (4) + 1);
  let price = Math.floor(Math.random() * (400) + 50);

  return `${product_name},${numPictures},${numTags},${price}\n`
};

const generatePictures = (num) => {
  let image = "https://loremflickr.com/320/240/clothing";
  let color = faker.commerce.color();
  let product_id = num;
  return `${color},${image},${product_id}\n`;
}

const generateTags = (num) => {
  let tag = faker.commerce.productMaterial();
  let product_id = num;
  return `${tag},${product_id}\n`;
}

const writeEntries = (stream, amount, dataFunc, encoding, cb) => {
  let i = amount;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const data = dataFunc(id);
      if (i % 100000 === 0) {
        console.log(`a hundred thousand rows written🕺 ${i} left to go`);
      }
      if (i === 0) {
        stream.write(data, encoding, cb);
      } else {
        ok = stream.write(data, encoding);
      }
    } while (i > 0 && ok);

    if (i > 0) {
      stream.once('drain', write);
    }
  }
  write();
}

writeEntries(writeProducts, 10000000, generateProduct, 'utf-8', () => {
  console.log('writing products completed!');
  writeProducts.end();
});

writeEntries(writePictures, 10000000, generatePictures, 'utf-8', () => {
  console.log('writing pictures completed!');
  writePictures.end();
});

writeEntries(writeTags, 10000000, generateTags, 'utf-8', () => {
  console.log('writing tags completed!');
  writeTags.end();
});
