const dotenv = require('dotenv').config;
const pgp = require('pg-promise');
const pgdb = pgp(`postgres://leilei:''@${process.env.host}:/${process.env.port}/sdc`);

BEGIN;
// psql -d sdc -U leilei -f server/scripts/postgresSchema.sql

// Copy to a temp table
COPY temp(itemId,id,name,stars,date,country,review,image,title,avatar,foundThisHelpful) FROM '/Users/leilei/Local/GitProjects/hrr45-sdc/reviews/server/data/10Reviews.csv' WITH DELIMITER ',' CSV HEADER;

// Insert from the temp table into my reviews table
INSERT INTO items(id)
  (SELECT DISTINCT itemId
  FROM temp)
  ON CONFLICT (id) DO NOTHING;

INSERT INTO reviews(itemId,name,stars,date,country,review,image,title,avatar,foundThisHelpful)
  (SELECT itemId,name,stars,date,country,review,image,title,avatar,foundThisHelpful
  FROM temp
  WHERE name IS NOT NULL);

// QUERIES

// Both selects return the same rows
// SELECT *
// FROM reviews r, items i
// WHERE r.itemId = i.id AND i.id = 9999999;

// SELECT * FROM reviews WHERE itemId = 9999999;

END;