const env = 'development';
const config = require('./scripts/knexfile.js')[env];
const knex = require('knex')(config);


knex('movies')
  .then((movies) => {
    console.log(movies);
    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
