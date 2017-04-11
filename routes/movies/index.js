var express = require('express');
var router = express.Router();
const db = require('../../db/knex.js');

/* GET movies listing. */
router.get('/', indexMovies);
router.post('/', postMovie);
router.get('/new', (req, res, next) => {
  res.render('new')
});
router.get('/:id', showMovie);


function indexMovies(req, res, next) {
  db('movies')
  .then(moviesIndex => {
    res.render('movies', {title: 'Movies Index Page!', moviesIndex});
  }).catch(err => {
    console.error(err);
  });
}

function postMovie(req, res, next) {
  const {title, director, poster_url, year, my_rating} = req.body;
  db('movies')
  .insert({title, director, poster_url, year, my_rating}, 'id')
  .then(resId => {
    let id = resId[0];
    console.log('SUCCESS');
    res.send({ redirect: '/movies/' + id})
  }).catch(err => {
    console.log(err);
  });
}

function showMovie(req, res, next) {
  const id = req.params.id;
  db('movies')
  .where({ id })
  .then(moviesIndex => {
    res.render('movies', {title: 'Here\'s the movie you wanted!', moviesIndex});
  }).catch(err => {
    console.error(err);
  });
}



module.exports = router;
