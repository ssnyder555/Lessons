const express = require('express');
const router = express.Router();

// models job is to communicate with server.js
const Author = require('../models/authors');


router.ger('/', (req, res) => {
  res.render('authors/index.ejs');
});

router.get('/new', (req, res) => {
  res.render('/authors/new.ejs');
});
router.post('/', (req, res) => {
  Author.create(req.body, (err, createdAuthor) => {
    console.log(req.body, ' this is req.body');
    console.log(createdAuthor, ' createdAuthor');
    if(err){
      console.log(err);
    } else 
  })
});









module.exports = router;
