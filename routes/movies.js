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

router.get('')

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  db('movies')
  .where('id', id)
  .then(moviesIndex => {
    res.render('movies', {title: 'Here\'s the movie you wanted!', moviesIndex});
  }).catch(err => {
    console.error(err);
  });
})

module.exports = router;
