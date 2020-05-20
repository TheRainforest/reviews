const express = require('express');
const db = require('../database');
// const bodyParser = require("body-parser");

const app = express();
const host = process.env.host || 'localhost';
const port = process.env.port || 3004;

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => {
  console.log(`Server hosted at http://${host}:${port}`);
});

// HTTP HANDLERS
app.get('/api/allreviews/', (req, res) => {
  var arr = req._parsedOriginalUrl.search;
  var id = arr === null ? 1 : arr.split('=')[1];

  db.getAllReviews(id, (err, data) => {
    if (err) {
      res.status(500).send("Something Broke!");
    } else {
      res.status(200).json(data);
    }
  });
}
