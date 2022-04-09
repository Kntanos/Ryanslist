const express = require('express')
const router = express.Router()

// SEARCH Routes ------------------------------------>

router.post('/create-search-answer', function (req, res) {

  var createOrSearch = req.session.data['create-search']
  
  if (createOrSearch == "Create"){
    res.redirect('/create-city')
  } else {
    res.redirect('/search-city')
  }

})

router.post('/advert-type-choice', function (req, res) {

  var chooseFilters = req.session.data['search-advert-type']
  
  if (chooseFilters == "Rentals"){
    res.redirect('/all-filter')
  }
  else if (chooseFilters == "For sale") {
    res.redirect('/all-filter')
  }
  else if (chooseFilters == "Dating") {
    res.redirect('/all-filter')
  }
  else if (chooseFilters == "All") {
    res.redirect('/check-answers-all')
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
    else if (advertType == "For sale") {
      res.redirect('/sales-price-filter')
  }
    else if (advertType == "Dating") {
      res.redirect('/dating-filters')
  }
})

router.post('/rentals-filter-options', function (req, res) {

  var filter = req.session.data['rentals-filters']
  
  if (filter == "Price"){
    res.redirect('/rentals-price-filter')
  }
  else if (filter == "Dates available") {
    res.redirect('/rentals-dates-filter')
  } 
  else if (filter == "Number of bedrooms") {
    res.redirect('/rentals-bedrooms-filter')
  }
  else if (filter == "Number of bathrooms") {
    res.redirect('/rentals-bathrooms-filter')
  }
})

// CREATE Routes ------------------------------------>

router.post('/create-type-choice', function (req, res) {

  var advertType = req.session.data['create-advert-type']
  
  if (advertType == "Rentals"){
    res.redirect('/create-rentals')
  }
  else if (advertType == "For sale") {
    res.redirect('/create-sales')
  }
  else if (advertType == "Dating") {
    res.redirect('/create-dating')
  }
})

module.exports = router
