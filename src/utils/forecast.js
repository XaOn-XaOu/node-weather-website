const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9c40d1474a2411170fb374e9a67fda0c&query=' + latitude + ',' + longitude//'13.70763549353172,%20100.38122153877099'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather sevice!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. ' +
                'Temperature: ' + body.current.temperature + ' degress out. ' +
                'Feel like: ' + body.current.feelslike + ' degress out. ' +
                'Wind speed: ' + body.current.wind_speed + ' km/h. ' +
                'Humidity: ' + body.current.humidity + '%.')
        }
    })
}

module.exports = forecast