var AWS = require("aws-sdk");
const serverless = require('serverless-http');
const express = require('express');
const app = express();
const courses = require('./route/courses');
const signup = require('./route/signup');

app.use(express.json());

app.get('/', function (req, res) {
  res.send('api works!!!');
});

app.use('/courses',courses);
app.use('/signup',signup);


module.exports.handler = serverless(app);