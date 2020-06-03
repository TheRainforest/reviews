// IMPORT VIA COMMAND LINE
// psql -d sdc -f server/scripts/postgresSchema.sql

// Copy data
// COPY itemReviews("itemId",id,name,stars,date,country,review,image,title,avatar,"foundThisHelpful") FROM '/Users/leilei/Local/GitProjects/HRR45-SDC-DATAONLY/10MReviews.csv' WITH DELIMITER ',' CSV HEADER;

// COPY itemReviews("itemId",id,name,stars,date,country,review,image,title,avatar,"foundThisHelpful") FROM '10MReviews.csv' WITH DELIMITER ',' CSV HEADER;

// QUERIES
// SELECT * FROM itemReviews WHERE "itemId" = 9999999;

// OPTIMIZATION
// CREATE INDEX review_itemIdx ON itemReviews("itemId");
