const { Client } = require('pg');
// const { Pool } = require('pg');

// const pool = new Pool({
//   host: process.env.dbhost || 'localhost',
//   database: process.env.database || 'sdc',
//   user: process.env.dbuser,
//   password: process.env.dbpw,
//   port: process.env.port || '5432'
// });
// pool.connect();

// const getAllReviews = (itemId, cb) => {
//   const getReviewsQuery = {
//     text: 'SELECT * FROM itemreviews WHERE itemId = $1',
//     values: [itemId]
//   }
//   pool.query(getReviewsQuery, cb);
// }

const client = new Client({
  host: process.env.dbhost || 'localhost',
  database: process.env.database || 'sdc',
  user: process.env.dbuser,
  password: process.env.dbpw,
  port: process.env.port || '5432'
});
client.connect();

const getAllReviews = (itemId, cb) => {
  const getAllReviewsQuery = `SELECT * FROM itemreviews
                              WHERE "itemId" = ${itemId}
                              ORDER BY "foundThisHelpful" DESC`;
  client.query(getAllReviewsQuery, (err, data) => cb(err, data.rows));
};

const getReview = (reviewId, cb) => {
  const getReviewQuery = `SELECT * FROM itemreviews
                          WHERE id = ${reviewId}`
  client.query(getReviewQuery, (err, data) => cb(err, data.rows));
};

const deleteReview = (reviewId, cb) => {
  const deleteReviewQuery = `DELETE FROM itemreviews
                             WHERE id = ${reviewId}
                             RETURNING id, "itemId", name, stars, date, country, review, image, title, avatar, "foundThisHelpful"`
  client.query(deleteReviewQuery, (err, data) => cb(err, data.rows));
};

const addReview = (itemId, review, cb) => {
  var addQuery = `INSERT INTO itemreviews
                  ("itemId", name, stars, date, country, review, image, title, avatar, "foundThisHelpful")
                  VALUES(
                    ${itemId},
                    '${review.name}',
                    '${review.stars}',
                    '${review.date}',
                    '${review.country}',
                    '${review.review}',
                    '${review.image}',
                    '${review.title}',
                    ${review.avatar},
                    ${review.foundThisHelpful})
                  RETURNING id, "itemId", name, stars, date, country, review, image, title, avatar, "foundThisHelpful"`;
  client.query(addQuery, (err, data) => cb(err, data.rows));
};

const updateReview = (reviewId, review, cb) => {
  const updateReviewQuery = `UPDATE itemreviews
            SET
              "itemId" = ${review.itemId},
              name = '${review.name}',
              stars = ${review.stars},
              date = '${review.date}',
              country = '${review.country}',
              review = '${review.review}',
              image = '${review.image}',
              title = '${review.title}',
              avatar = ${review.avatar},
              "foundThisHelpful" = ${review.foundThisHelpful}
            WHERE id=${reviewId}
            RETURNING id, "itemId", name, stars, date, country, review, image, title, avatar, "foundThisHelpful"`;
  client.query(updateReviewQuery, (err, data) => cb(err, data.rows));
};

module.exports = {
  getAllReviews,
  getReview,
  deleteReview,
  addReview,
  updateReview
}
