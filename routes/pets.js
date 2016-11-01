const router              = require('express').Router();
const { authenticate }    = require('../lib/auth');
const { searchPets }     = require('../services/petFinder');
const { getFavorites,
        saveFavorite,
        deleteFavorites } = require('../models/favorites');

router.get('/', authenticate, getFavorites, (req, res) => {
  res.render('pets/index', {
    user: res.user,
    results: res.results || [],
    favorites: res.favorites || []
  });
});

router.post('/search', authenticate, searchPets, getFavorites, (req, res) => {
  // console.log('results ***** ', res.results);
  res.render('pets/index', {
    user: res.user,
    results: res.results || [],
    favorites: res.favorites || []
  });
});

router.delete('/favorites/:id', deleteFavorites, (req, res) => {
  res.redirect('/pets');
});

router.post('/favorites', saveFavorite, (req, res) => {
  res.redirect('/pets');
});

module.exports = router;
