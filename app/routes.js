const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post('/create-search-answer', function (req, res) {

  var createOrSearch = req.session.data['create-search']
  
  if (createOrSearch == "create"){
    res.redirect('/create-new')
  } else {
    res.redirect('/search-city')
  }

})

router.post('/advert-type-choice', function (req, res) {

  var chooseFilters = req.session.data['search-advert-type']
  
  if (chooseFilters == "Rentals"){
    res.redirect('/rentals-filters')
  }
  else if (chooseFilters == "Sales") {
    res.redirect('/sales-filters')
  }
  else if (chooseFilters == "Dating") {
    res.redirect('/dating-filters')
  }

})

router.post('/all-filter-choice', function (req, res) {

  var choice = req.session.data['all-filter']
  var advertType = req.session.data['search-advert-type']
  
  if (choice == "Show me all the adverts"){
    res.redirect('/check-answers-all')
  } else if (advertType == "Rentals") {
      res.redirect('/rentals-filters')
  }
    else if (advertType == "Sales") {
      res.redirect('/sales-filters')
  }
    else if (advertType == "Dating") {
      res.redirect('/dating-filters')
  }
})

router.post('/rentals-filter-options', function (req, res) {

  var filter = req.session.data['rentals-filters']
  
  if (filter == "Price"){
    res.redirect('/price-filter')
  }
  else if (chooseFilters == "Dates available") {
    res.redirect('/dates-available-filter')
  } 
  else if (chooseFilters == "Number of bedrooms") {
    res.redirect('/number-of-bedrooms-filter')
  }
  else if (chooseFilters == "Number of bathrooms") {
    res.redirect('/number-of-bathrooms-filter')
  }
})

module.exports = router
