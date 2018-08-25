const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const MONGODB_HOST = process.env.DB_HOST ||'mongodb://mongo:27017';
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, origin, content-type, accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
  next();
});

mongoose.connect(MONGODB_HOST)
  .then(() => {
    console.log('Connected');
  })
  .catch((err) => {
    console.log(err);
  });

require('./models/User');

// app.use(require('./routes'));
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(PORT, () => {
  console.log(`server is running up on localhost:${PORT}`);
});