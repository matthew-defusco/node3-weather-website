const request = require('request')

const forecast = (lat, lon, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=70be2adea6b2dfb8bce4c6061472d5d1&query=${lat},${lon}&units=f`

  request({
    url,
    json: true
  }, (error, {
    body
  }) => {
    if (error) {
      callback('Unable to connect to the weather service!')
    } else if (body.error) {
      callback('Unable to find location')
    } else {
      const current = body.current
      callback(undefined, `${current.weather_descriptions[0]}. It is currently ${current.temperature} degrees outside but it feels like ${current.feelslike}. The humidity is ${current.humidity}%.`)
    }
  })
}

module.exports = forecast