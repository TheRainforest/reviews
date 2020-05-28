DROP TABLE IF EXISTS temp;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS items;

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  itemName varchar(50)
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  itemId int references items(id),
  name varchar(50),
  stars int,
  date varchar(50),
  country varchar(50),
  review varchar(1000),
  image varchar(250),
  title varchar(250),
  avatar int,
  foundThisHelpful int
);

CREATE TABLE temp (
  id int,
  itemId int,
  name varchar(50),
  stars int,
  date varchar(50),
  country varchar(50),
  review varchar(1000),
  image varchar(250),
  title varchar(250),
  avatar int,
  foundThisHelpful int
);