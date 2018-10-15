const express = require('express');
const router = express.Router();

// models job is to communicate with server.js
const Author = require('../models/authors');


router.ger('/', (req, res) => {
  res.render('authors/index.ejs');
});

router.get('/new')









module.exports = router;
