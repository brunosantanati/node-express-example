const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/70ff7c58595674b62c6cb99468310588/' + latitude + ',' + longitude + '?units=si&lang=pt'

    request({ url, json: true }, (error, { body } ) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if(body.error){
            callback('Unable to find location!', undefined)
        }else{
            callback(undefined, body.daily.data[0].summary + ' Temperatura atual: ' + body.currently.temperature + ' graus. Existe ' + body.currently.precipProbability + '% chances de chover.')
        }
    })

}

module.exports = forecast