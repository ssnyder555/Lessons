
const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('./db/db');

const authorsController = require('./controllers/authors');

// make sure to require this before our controller
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// setting up the middleware for our controller
// where every route will start with /authors
app.use('/authors', authorsController);

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/:id', (req, res) => {
  Authors.findById(req.params.id, (err, authorFound) => {

    res.render('/authors/shows.ejs', {
      author: authorFound
    })
  });
})


app.listen(3000, () => {
  console.log('listening on port 3000');
})
