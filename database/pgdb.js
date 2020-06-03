// const { Client } = require('pg');
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  database: process.env.DATABASE,
  user: process.env.DBUSER,
  password: process.env.DBPW,
});
pool.connect();

const getAllReviews = (itemId, cb) => {
  const getAllReviewsQuery = `SELECT * FROM itemreviews
                              WHERE "itemId" = ${itemId}
                              ORDER BY "foundThisHelpful" DESC`;
  pool.query(getAllReviewsQuery, (err, data) => cb(err, data.rows));
};

const getReview = (reviewId, cb) => {
  const getReviewQuery = `SELECT * FROM itemreviews
                          WHERE id = ${reviewId}`
  pool.query(getReviewQuery, (err, data) => cb(err, data.rows));
};

const deleteReview = (reviewId, cb) => {
  const deleteReviewQuery = `DELETE FROM itemreviews
                             WHERE id = ${reviewId}
                             RETURNING id, "itemId", name, stars, date, country, review, image, title, avatar, "foundThisHelpful"`
  pool.query(deleteReviewQuery, (err, data) => cb(err, data.rows));
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
  pool.query(addQuery, (err, data) => cb(err, data.rows));
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
  pool.query(updateReviewQuery, (err, data) => cb(err, data.rows));
};

module.exports = {
  getAllReviews,
  getReview,
  deleteReview,
  addReview,
  updateReview
}
