const express = require('express');
const homeRouter = express.Router();
const root = require('../utills/Main');
const path = require('path');

homeRouter.get('/', (req, res, next) => {
  res.sendFile(path.join(root, 'views', 'home.html'));
})


module.exports = homeRouter;