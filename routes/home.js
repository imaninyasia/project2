const router = require('express').Router();
const { findPets } = require('../services/petFinder');

router.get('/', (req, res) => {
  res.render('index', {
    message: 'okay uhm can I give you jenna\'s number',
    result: res.results,
  });
});

// router.get('/search', (req, res) => {
//   res.render('show', {});
// });

router.post('/search', findPets, (req, res) => {
  console.log(res.results);
  res.render('show', {
    messsage: 'this is a test',
  });
});

module.exports = router;
