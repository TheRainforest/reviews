const db = require("mysql");
const dbConfig = require("./config.js");

const connection = db.createConnection(dbConfig);

// SAMPLE INSERT
`INSERT INTO reviews
            (itemId, name, stars, date, review, image, title, avatar, foundThisHelpful)
            VALUES(1, 'Orange', 4, 'November 10, 2019', 'It\'s alright', '', '', 1, 1)`;

const addReview = (itemId, review, callback) => {
  var sql = `INSERT INTO reviews
            (itemId, name, stars, date, review, image, title, avatar, foundThisHelpful)
            VALUES(${itemId}, "${review.name}", "${review.stars}", "${review.date}", "${review.review}", "${review.image}", "${review.title}", ${review.avatar}, ${review.foundThisHelpful})`;
  connection.query(sql, callback);
};

const getAllReviews = (itemId, callback) => {
  var sql = `SELECT * FROM reviews WHERE itemId=${itemId}`;
  connection.query(sql, callback);
};

const getReview = (reviewId, callback) => {
  var sql = `SELECT * FROM reviews WHERE id=${reviewId}`;
  connection.query(sql, callback);
};

const updateReview = (reviewId, review, callback) => {
  var sql = `UPDATE reviews
            SET
            itemId = ${review.itemId},
            name = "${review.name}",
            stars = "${review.stars}",
            date = "${review.date}",
            review = "${review.review}",
            image = "${review.image}",
            title = "${review.title}",
            avatar = ${review.avatar},
            foundThisHelpful = ${review.foundThisHelpful}
            WHERE id=${reviewId}`;
  connection.query(sql, callback);
};

const deleteReview = (reviewId, callback) => {
  var sql = `DELETE FROM reviews WHERE id=${reviewId}`;
  connection.query(sql, callback);
};

module.exports = {
  connection,
  addReview,
  getAllReviews,
  getReview,
  updateReview,
  deleteReview
}
