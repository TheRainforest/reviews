# Rainforest: Reviews Service
> A service to handle reviews, built on Austin's Legacy Code.

## Related Projects
https://github.com/AmazonRainforest

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage
The page uses a '/?id=[id]' format. To visit the reviews page for the corresponding id (replace [id] with a number ranging from 1-100).

**For Production**
1. To start up the server (webpack with babel)
```sh
npm run build:prod
```
2. To start up the client
```sh
npm start:prod
```

### CRUD API
|    Method    |           Endpoint          |                   Action                |
| ------------ | --------------------------- | --------------------------------------- |
| **POST**     |  /api/allreviews/:id        |  CREATE a new review for an item id     |
| **GET**      |  /api/allreviews/:id        |  READ and return reviews for an item id |
| **GET**      |  /api/allreviews/review:id  |  READ and return a review by review id  |
| **PUT**      |  /api/allreviews/review/:id |  UPDATE review by review id             |
| **DELETE**   |  /api/allreviews/review/:id |  DELETE review by review id             |

**Example Response for /api/allreviews/review/:id**
```sh
{
  "itemId": 1,
  "name": "Reviewing Hobbyist",
  "stars": "4.5",
  "date": "January 10, 2020",
  "review": "Gone are the days of biting off slice-sized chunks of banana and spitting them onto a serving tray…. Next on my wish list: a kitchen tool for dividing frozen water into cube-sized chunks.",
  "image": "",
  "title": "Best Hutzler 571 Banana Slicer",
  "avatar": 2,
  "foundThisHelpful": 1952
}
```

## Requirements
This module follows [Airbnb style guide](https://github.com/airbnb/javascript)

- mysql
- Express.js
- React with JSX
- Node.js

## To use with a proxy
- styles.css is on the same level as index
- webpack bundles as bundle.js
- the module component is reviewsapp

## Development
### Installing Dependencies

From within the root directory:
```sh
npm install
```
**Set up environment variables**
- Make a copy of .env_sample to add server host and port details.
- Save as .env and ensure it's added to .gitignore.

**Seed the database using seeder.js**
```sh
npm run seed
```

**FOR DEVELOPMENT**
1. To start up the server (webpack with babel)
```sh
npm run build:dev
```
2. To start up the client
```sh
npm start:dev
```
3. To test. Use 'test' to run without coverage, 'test:cov' for coverage reports
```sh
npm test
npm test:cov
```

### Database-specific Instructions

Change 'user' and 'pw' in config.js to your own (probably 'root', ''?)

This component uses mariadb for a DBMS. Installing mariadb may cause conflicts with your mysql, so feel free to use mysql by following the numbered steps below. If using mariadb, skip the numbered steps.


#### TO USE MYSQL INSTEAD OF MARIADB FOLLOW THESE STEPS
- in database/index.js: change "const db = require("db/callback");" to "const db = require("mysql");"
- terminal command: npm install mysql
- terminal command: mysql -u <USER> -p < schema.sql // ----> should add the database 'reviews' to your databases

IGNORE THE REST OF THE PAGE

#### TO USE MARIADB
Please ensure that mariadb is running and execute [mysql -u <USER> -p < schema.sql] to add the database followed by [npm run seed] to seed your database