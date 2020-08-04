const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')


router.get('/', (req, res) => {
  const keyword = req.query.keyword
  if (keyword !== '') {
    return Restaurant.find({
      name: { $regex: keyword, $options: "i" }
    })
      .lean()
      .then(restaurant => res.render('index', { restaurant, keyword }))
      .catch(error => console.log(error))
  } else if (keyword === '') {
    return res.redirect('/')
  }
})

module.exports = router