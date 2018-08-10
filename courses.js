const serverless = require('serverless-http');
const express = require('express')
const app = express()


app.get('/', function (req, res) {
  res.send('this is courses api')
  
})

module.exports.handler = serverless(app);