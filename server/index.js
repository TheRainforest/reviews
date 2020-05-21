const express = require('express');
const db = require('../database');
// const bodyParser = require("body-parser");

const app = express();
const host = process.env.host || 'localhost';
const port = process.env.port || 3004;

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => {
  console.log(`Server hosted at http://${host}:${port}`);
});

// HTTP HANDLERS
app.post('/api/allreviews/:id', (req, res) => {
  db.addReview(req.params.id, req.body, (err) => {
    if (err) {
      res.status(500).send(`Failed to add review`);
    } else {
      res.sendStatus(200);
    }
  });
});

app.get('/api/allreviews/:id', (req, res) => {
  db.getAllReviews(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send('Failed to get all reviews for item');
    } else {
      res.status(200).json(data);
    }
  });
});

app.get('/api/allreviews/review/:id', (req, res) => {
  db.getReview(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send('Failed to get the review');
    } else {
      res.status(200).json(data);
    }
  });
});

app.put('/api/allreviews/review/:id', (req, res) => {
  db.updateReview(req.params.id, req.body, (err, data) => {
    if (err) {
      res.status(500).send(`Failed to update the review ${err}`);
    } else {
      res.sendStatus(200);
    }
  })
});

app.delete('/api/allreviews/review/:id', (req, res) => {
  db.deleteReview(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send('Failed to delete review');
    } else {
      res.sendStatus(200);
    }
  })
});
