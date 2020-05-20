const db = require("mysql");
const dbConfig = require("./config.js");

const connection = db.createConnection(dbConfig);

const getAllReviews = function(id, callback) {
  var sql = `select * from reviews where id=${id}`;
  connection.query(sql, function(err, results) {
    if (err) {
      callback(err);
    }
    callback(null, results);
  });
};

module.exports.connection = connection;
module.exports.getAllReviews = getAllReviews;
