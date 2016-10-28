const fetch = require('node-fetch');
require('dotenv').config();
const API_KEY = process.env.API_KEY;


function findPets(req, res, next) {

  const API_URL = `http://api.petfinder.com/pet.find?format=json&key=${API_KEY}&location=10001&animal=dog`;

  fetch(`${API_URL}`)
  .then((result) => {
    res.results = results;
    console.log(results);
    next();
  })
  .catch((err) => {
    res.err = err;
    next();
  });
}

module.exports = { findPets };
;

