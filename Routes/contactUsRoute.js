const express = require('express');
const contactUsRouter = express.Router();
const root = require('../second/utills/Main');
const path = require('path');


contactUsRouter.get('/', (req, res, next) => {
  res.sendFile(path.join(root, 'views', 'contactUs.html'))
})


contactUsRouter.post('/detail', (req, res, next) => {

  res.sendFile(path.join(root, 'views', 'contactUsdetail.html'));
})


module.exports = contactUsRouter;