require('dotenv').config();

const express = require('express');
const path = require('path');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
require('./models');
const webpackConfig = require('../webpack.config.js');
const schema = require('./schema/schema');
const axios = require('axios');
const YelpGraphQL = require('yelp-graphql');

const app = express();

const MONGO_URI = `mongodb://${process.env.DB_NAME}:${process.env.DB_PASS}@ds135519.mlab.com:35519/foodmatch`;
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, { useNewUrlParser: true });
mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', error => console.log('Error connecting to MongoLab:', error));

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true,
}));

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});

const apiKey = process.env.YELP_KEY

let yelp = new YelpGraphQL({ apiKey });

app.post('/api/search', function(req, res) {
  const query = `query Search($term: String, $location: String){
    search(term: $term, limit: 5, location: $location) {
      business {
        name
        alias
        rating
        review_count
        price
        distance
        location {
          formatted_address
        }
      }
    }
  }`;

  const variables = { term: `${req.body.term} restaurants`, location: req.body.location };
  const locale = req.body.locale;
  // Query Yelp
  yelp.query({ locale, query, variables }).then( (response) => {
    res.send(response.data)
  }).catch((err) => {
    res.send(err);
  })
})

module.exports = app;