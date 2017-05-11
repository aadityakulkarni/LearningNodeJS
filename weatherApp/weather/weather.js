const request = require('request');

const getWeather = (lat, lng, callback) => {

    request({
        url:`https://api.darksky.net/forecast/14276ec1a8268409fc9acb18b716d023/${lat},${lng}`,
        json:true
    }, (error, response, body) => {
        // if(!error && response.statusCode === 'OK') {
        //     console.log(body.currently.temperature);
        // } else {
        //     console.log('Unable to fetch weather');
        // }
        if(error) {
            callback('Error: Unable to fetch weather');
        } else if(response.statusCode === 400) {
            callback('400: Unable to fetch weather');
        } else if(response.statusCode === 200) {
            callback(undefined, body.currently.temperature);
        }
    });
};

module.exports = {
    getWeather
};

