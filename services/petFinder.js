const fetch = require('node-fetch');
const API_KEY = process.env.API_KEY;
const API_URL = 'http://api.petfinder.com/pet.find?';
const API_PRL = `http://api.petfinder.com/pet.find?format=json`;


function searchPets(req, res, next) {
  console.log('req.body.animal **** ', req.body.animal)
   // fetch(`${API_PRL}&key=${API_KEY}&location=10001&${req.body.animal}`)
   fetch('http://api.petfinder.com/pet.find?format=json&key=8b5d130ce2df6f51634c8bb281b7aeb8&location=10001&${req.body.animal}')
  .then(r => r.json())
  .then(results => {
    res.results = results.petfinder.pets.pet;
    next();
  })
  .catch((err) => {
    res.err = err;
    next();
  });

}

module.exports = { searchPets };


// .result.petfinder.pets.pet
