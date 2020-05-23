const db = require("../../database");
const faker = require("faker");
const moment = require("moment");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var arr = [
  "the United States",
  "the United States",
  "the United States",
  "the United States",
  "the United States",
  `${faker.address.country()}`,
];

var counter = 0;

for (var j = 0; j < 8; j++) {
  for (var i = 0; i < 6; i++) {
    while (counter < 1000) {
      var insertStatement =
      `INSERT INTO reviews
      (itemId, name, stars, date, country, review, image, title, avatar, foundThisHelpful)
      VALUES(
        ${getRandomInt(101)},
        '${faker.name.firstName()} ${faker.name.lastName()}',
        '${getRandomInt(21)}',
        '${moment(faker.date.recent(90)).format('MMMM DD[,] YYYY')}',
        '${ arr[getRandomInt(6)]}',
        '${faker.lorem.sentences()} ${faker.lorem.sentences()}',
        'randomURL',
        '${faker.lorem.sentence()}',
        '${getRandomInt(16)}',
        '${getRandomInt(86)}')`;

      db.connection.query(insertStatement, function(err, result) {});
      counter++;
      if (j === 7 && i === 5 && counter === 999) {
        console.log("done seeding!");
      }
    }
  }
}
