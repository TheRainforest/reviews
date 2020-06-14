# Rainforest: Reviews Service



## Related Projects
https://github.com/TheRainforest

## Technologies Used
  - Frontend: React, HTML5, CSS3, jQuery
  - Backend: PostgreSQL, Express.js, Node.js
  - Deployment: AWS (EC2, S3)

## Style Guide
This service follows [Airbnb style guide](https://github.com/airbnb/javascript)

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage
The page uses a '/?id=[id]' format. To visit the reviews page for the corresponding id (replace [id] with a number ranging from 1-100).

**For Production**
1. To start up the server
```sh
npm run build
```
2. To start up the client
```sh
npm start
```

### CRUD API
|    Method    |           Endpoint          |                   Action                |
| ------------ | --------------------------- | --------------------------------------- |
| **POST**     |  /api/allreviews/:id        |  CREATE a new review for an item id     |
| **GET**      |  /api/allreviews/:id        |  READ and return reviews for an item id |
| **GET**      |  /api/allreviews/review/:id |  READ and return a review by review id  |
| **PUT**      |  /api/allreviews/review/:id |  UPDATE review by review id             |
| **DELETE**   |  /api/allreviews/review/:id |  DELETE review by review id             |

**Example Data Inputs for the POST endpoint**
/:id is the review id whereas itemId refers to the item for purchase
```json
{
  "name": "Reviewing Hobbyist",
  "stars": 4,
  "date": "January 10, 2020",
  "country": "the United States",
  "review": "Gone are the days of biting off slice-sized chunks of banana and spitting them onto a serving tray…. Next on my wish list: a kitchen tool for dividing frozen water into cube-sized chunks.",
  "image": "",
  "title": "Best Hutzler 571 Banana Slicer",
  "avatar": 2,
  "foundThisHelpful": 1952
}
```

**Example Data Inputs for the PUT endpoint**
/:id is the review id whereas itemId refers to the item for purchase
```json
{
  "itemId": 1,
  "name": "Reviewing Hobbyist",
  "stars": 4,
  "date": "January 10, 2020",
  "country": "the United States",
  "review": "Gone are the days of biting off slice-sized chunks of banana and spitting them onto a serving tray…. Next on my wish list: a kitchen tool for dividing frozen water into cube-sized chunks.",
  "image": "",
  "title": "Best Hutzler 571 Banana Slicer",
  "avatar": 2,
  "foundThisHelpful": 1952
}
```

## For Development
**Install Dependencies**

From within the root directory:
```sh
npm install
```
**Set up environment variables**
- Make a copy of .env_sample to add server host and port details.
- Save as .env and ensure it's added to .gitignore.

**Start up the server**
```sh
npm run build:dev
```
**Start up the client**
```sh
npm start:dev
```
**To test. Use 'test' to run without coverage, 'test:cov' for coverage reports**
```sh
npm test
npm test:cov
```
**To generate records for seeding database**
In generateLargeData.js, update csv output location on line 21 and specify desired minimum records on line 31.
```sh
npm run data:gen
```
