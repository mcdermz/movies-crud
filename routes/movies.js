var express = require('express');
var router = express.Router();
const db = require('../db/knex.js');

/* GET movies listing. */
router.get('/', (req, res, next) => {
  db('movies')
  .then(moviesIndex => {
    res.render('movies', {title: 'Movies Index Page!', moviesIndex});
    knex.destroy();
  }).catch(err => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  db('movies')
  .where('id', id)
  .then(moviesIndex => {
    res.render('movies', {title: 'Here\'s the movie you wanted!', moviesIndex});
    knex.destroy();
  }).catch(err => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
})

module.exports = router;
