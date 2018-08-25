const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017')
  .then(() => {
    console.log('Connected');
  })
  .catch((err) => {
    console.log(err);
  });


app.get('/', (req, res) => {
  res.send("Hello kitty");
});
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});