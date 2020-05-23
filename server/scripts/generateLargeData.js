const fs = require('fs');
const faker = require('faker');
const moment = require('moment');

// Get a random number
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

// Data array for country options
const country = [
  "the United States",
  "the United States",
  "the United States",
  "the United States",
  "the United States",
  faker.address.country(),
];

// Write the record to the CSV
let writer = fs.createWriteStream('server/data/1000Reviews.csv');
writer.write('itemId,id,name,stars,date,country,review,image,title,avatar,foundThisHelpful\n', 'utf8');
console.time();

// reviewIdCounter increments globally so as to maintain review id uniqueness
let reviewIdCounter = 0;
let itemIdCounter = 0;

function writeRecords(writer, encoding, callback) {
  // Create x-number of records based on desired number of records (minRecords)
  let minRecords = 1000;
  function write() {
    let checkMem = true;

    do {
      itemIdCounter += 1;
      if (itemIdCounter === minRecords) {
        writer.write(encoding, callback)
      } else {

        let reviewsCount = itemIdCounter < minRecords * .99 ? getRandomInt(5) : getRandomInt(28);
        let review = {};

        // Create data for a review if there is at least 1 review to be added to the item
        // Otherwise solely increment the itemId to meet min records for requirement
        if (reviewsCount > 0) {
          let numReviews = 0;
          while(numReviews <= reviewsCount){
            review = {
              itemId: itemIdCounter,
              id: reviewIdCounter += 1,
              name: `${faker.name.firstName()} ${faker.name.lastName()}`,
              stars: getRandomInt(21),
              date: `"${moment(faker.date.recent(90)).format('MMMM DD[,] YYYY')}"`,
              country: country[getRandomInt(6)],
              // date: `"Reviewed in ${ country[getRandomInt(6)] } on ${moment(faker.date.recent(90)).format('MMMM DD[,] YYYY')}"`,
              review: `${faker.lorem.sentences()} ${faker.lorem.sentences()}`,
              image: 'randomURL',
              title: faker.lorem.sentence(),
              avatar: getRandomInt(16),
              foundThisHelpful: getRandomInt(86)
            }
            numReviews += 1;
            checkMem = writer.write(`${Object.values(review).toString()}\n`);
          }
        } else {
          review = {
            itemId: itemIdCounter
          }
          checkMem = writer.write(`${Object.values(review).toString()}\n`);
        }
      }
    } while((itemIdCounter < minRecords) && checkMem);
    if (!checkMem) {
      writer.once('drain', write);
    }
  }
  write();
}

writeRecords(writer, 'utf8', () => {
  writer.end(console.timeEnd());
  console.log(`Data Generation Complete for ${itemIdCounter} items and ${reviewIdCounter} review records`);
});
