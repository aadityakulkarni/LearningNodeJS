
const request = require('request');

//14276ec1a8268409fc9acb18b716d023

const geocodeAddress = (address, callback) => {
    
    const encodedAddress = encodeURIComponent(address);
    request({
        url:`http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
        json:true
    }, (error, response, body) => {
        //console.log(JSON.stringify(body, undefined, 4));
        if(error) {
            callback('Unable to connect to the server');
        } else if(body.status === 'ZERO_RESULTS') {
            callback('Unable to find address');
        } else if(body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            });
        }
    });
};


module.exports = {
    geocodeAddress
}