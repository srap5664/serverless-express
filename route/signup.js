const AWS = require("aws-sdk");
const Joi = require('joi');
const express = require('express');
const router = express.Router();

AWS.config.update({
  region: "us-west-1",
  endpoint: "http://localhost:8000"
});
const docClient = new AWS.DynamoDB.DocumentClient();


router.post('/',function(req, res){
  
  const schema = Joi.object().keys({
      userName: Joi.string().alphanum().min(3).max(30).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required(),
      userFirstName: Joi.string().regex(/^[a-z]$/).required(),
      userLastName: Joi.string().regex(/^[a-zA-Z]$/).required(),
      userEmail: Joi.string().email({ minDomainAtoms: 2 }).required()
  });
    
  Joi.validate(req.body , schema, function (err, value) { 
  
    if(err) 
      return  res.status(400).send(err.details[0].message);
    
    
  });
    
});
  

//export this router to use in our index.js
module.exports = router;