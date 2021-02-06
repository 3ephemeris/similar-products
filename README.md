# Backend Design

## Endpoints

GET api/products/:productId/similar
* returns all similar-products matching the product id
* Success status code: 200
```json
// example response body
{
  "id": Int,
  "name": String,
  "price": String,
  "pictures": [{
    "pictureId": Int, 
    "color": String,
    "image": String
  }],
  "tags": [{
    "tagId": Int,
    "tag": String
  }]
}
```

POST: api/products/:productId/similar
* adds to similar products that matches the product id
* Success status code: 201
```json
// example request body
{
  "id": Int,
  "name": String,
  "price": String,
  "pictures": [{
    "pictureId": Int, 
    "color": String,
    "image": String
  }],
  "tags": [{
    "tagId": Int,
    "tag": String
  }]
}
```

PATCH: api/products/:productId/similar/:similarId
* updates a similar product that matches the similarId
* Success status code: 200
```json
// example request body
{
  "id": Int,
  "name": String,
  "price": String,
  "pictures": [{
    "pictureId": Int, 
    "color": String,
    "image": String
  }],
  "tags": [{
    "tagId": Int,
    "tag": String
  }]
}
```
DELETE: api/products/:productId/similar/:similarId
* Deletes one from similar products that matches the similarId
* Success status code: 200

