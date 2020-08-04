const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

router.get('/:type/:sort/:filter', (req, res) => {
  const filter = req.params.filter
  Restaurant.find()
    .lean()
    .sort({ [req.params.type]: [req.params.sort] })
    .then(restaurant => res.render('index', { restaurant, filter }))
    .catch(error => console.log(error))
})


module.exports = router