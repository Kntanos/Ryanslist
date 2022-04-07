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

router.post('/filter-choices', function (req, res) {

  var chooseFilters = req.session.data['search-advert-type']
  
  if (chooseFilters == "rentals"){
    res.redirect('/rentals-filters')
  }
  else if (chooseFilters == "sales") {
    res.redirect('/sales-filters')
  } else {res.redirect('/dating-filters')}

})

router.post('/rentals-filter-options', function (req, res) {

  var filter = req.session.data['rentals-filters']
  
  if (filter == "price"){
    res.redirect('/price-filter')
  }
  else if (chooseFilters == "dates-available") {
    res.redirect('/dates-available-filter')
  } else {res.redirect('/number-of-bedrooms-filter')}

})

module.exports = router
