const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post('/create-search-answer', function (req, res) {

  var createOrSearch = req.session.data['create-search']
  
  if (createOrSearch == "create"){
    res.redirect('/create-new')
  } else {
    res.redirect('/search-new')
  }

})

module.exports = router
