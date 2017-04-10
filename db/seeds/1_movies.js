exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {
          id: 1,
          title: 'Pulp Fiction',
          director: 'Q. Tarantino',
          year: 1996,
          poster_url: 'https://images-na.ssl-images-amazon.com/images/I/51SKHxkZCNL._SY445_.jpg',
          my_rating: 5
        },
        {
          id: 2,
          title: 'Fake Movie',
          director: 'Z. Blarantino',
          year: 2006,
          poster_url: 'https://s-media-cache-ak0.pinimg.com/736x/c1/ab/78/c1ab782b93344350aa968604dbfdc9d8.jpg',
          my_rating: 4
        },
        {
          id: 3,
          title: 'The Fakerist',
          director: 'B. Poorino',
          year: 1999,
          poster_url: 'https://s-media-cache-ak0.pinimg.com/736x/43/30/87/43308731958b3b64b4dc743484892881.jpg',
          my_rating: 2
        },
        {
          id: 4,
          title: 'I Made It Up',
          director: 'S. Tropino',
          year: 2012,
          poster_url: 'https://s-media-cache-ak0.pinimg.com/originals/12/dc/35/12dc35e24efdfa9e53a6f94ebb39ea2a.jpg',
          my_rating: 3
        }
      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('movies_id_seq', (SELECT MAX(id) FROM movies));"
      );
    });
};
