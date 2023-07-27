

require('dotenv').config({ override: true });

const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const https = require('https');
const request = require('request');
const ejsLint = require('ejs-lint');
const _ = require('lodash');
const bparser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bparser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public/'));

mongoose.connect('mongodb://localhost:27017/to_do', {
  auth: {
    username: `${process.env.USERNAME}`,
    password: `${process.env.PASSWORD}`,
  },
  authSource: 'admin',
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(() => {
  console.log('Connected to database');
}).catch((err) => {
  console.log('Failed to connect to database:', err);
  console.log('Creating new database...');
  mongoose.connection.db.createCollection('to_do', (err) => {
    if (err) {
      console.log('Failed to create new database:', err);
    } else {
      console.log('New database created');
    }
  });
});

const listSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const List = mongoose.model('List', listSchema);

app.route('/')
  .get((req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Hello World!555');
  })
  .post(async (req, res) => {
    // Handle POST request
  });

app.route('/to_do/:title')
  .get((req, res) => {
    res.set('Content-Type', 'text/html');
    let title1 = req.params.title;
    List.findOne({ title: req.params.title }, (err, item1) => {
      if (!err) {
        res.write(`<h2>${item1.title}</h2><pre>${item1.content}</pre>`);
      } else {
        res.send(err);
      }
    });
  });

app.listen(443, (err) => {
  if (!err) {
    console.log('Listening on port 443');
  }
});
