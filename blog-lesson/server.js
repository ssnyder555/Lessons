const express = require('express');
const app  = express();
const bodyParser = require('body-parser');
 require('/db/db');

const authorsController = require('./controllers/authors');



// make sure to require before the controller
app.use(bodyParser.urlencoded({extend: false}));
// setting up the middleware for our controllers
// every route will start with controllers

 app.use('/authors', authorsController);

app.get('/', (req, res) => {
  res.render('index.ejs');
})

app.listen(3000, () => {
  console.log('listening');
})
