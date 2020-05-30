DROP TABLE IF EXISTS itemReviews;

CREATE TABLE itemReviews (
  id SERIAL PRIMARY KEY,
  "itemId" int,
  name varchar(50),
  stars int,
  date varchar(50),
  country varchar(50),
  review varchar(1000),
  image varchar(250),
  title varchar(250),
  avatar int,
  "foundThisHelpful" int
);
