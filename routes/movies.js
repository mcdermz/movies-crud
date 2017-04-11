var express = require('express');
var router = express.Router();
const db = require('../db/knex.js');

/* GET movies listing. */
router.get('/', (req, res, next) => {
  db('movies')
  .then(moviesIndex => {
    res.render('movies', {title: 'Movies Index Page!', moviesIndex});
  }).catch(err => {
    console.error(err);
  });
});

router.get('/new', (req, res, next) => {
  res.render('new')
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  db('movies')
  .where('id', id)
  .then(moviesIndex => {
    res.render('movies', {title: 'Here\'s the movie you wanted!', moviesIndex});
  }).catch(err => {
    console.error(err);
  });
});

router.post('/', (req, res, next) => {
  const {title, director, poster_url, year, my_rating} = req.body;
  db('movies')
  .insert({title: title, director: director, poster_url: poster_url, year: year, my_rating: my_rating})
  .then(() => {
    console.log('SUCCESS');
    res.redirect('/movies')
  }).catch(err => {
    console.log(err);
  });
});

module.exports = router;
