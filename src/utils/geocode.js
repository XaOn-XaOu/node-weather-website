const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZXZlcnl0aGluZy1idXQiLCJhIjoiY2t1Yzhpa3VzMDlqdjJycnZkdnY5YzV0ZSJ9.UjrkcBAd3PVx0iNYdWLoxg&limit=1'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather sevice!', undefined)
        } else if (!body.features.length) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode