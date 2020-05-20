const db = require("mysql");
const dbConfig = require("./config.js");

const connection = db.createConnection(dbConfig);

const getAllReviews = function(id, callback) {
  var sql = `select * from reviews where id=${id}`;
  connection.query(sql, callback);
};

module.exports = {
  connection,
  getAllReviews
}

