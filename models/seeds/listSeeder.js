const restaurantData = require('../../restaurant.json').results
const Restaurant = require('../restaurant')

const db = require('../../config/mongoose')

db.once('open', () => {
  restaurantData.forEach(data => {
    Restaurant.create({
      name: `${data.name}`,
      name_en: `${data.name_en}`,
      category: `${data.category}`,
      image: `${data.image}`,
      location: `${data.location}`,
      phone: `${data.phone}`,
      google_map: `${data.google_map}`,
      rating: `${data.rating}`,
      description: `${data.description}`,
    })
  })
  console.log('done!')
})

