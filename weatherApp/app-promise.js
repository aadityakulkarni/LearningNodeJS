const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
            .options({
                a: {
                    demand: true,
                    alias: 'address',
                    describe: 'Address to fetch weather for',
                    string: true
                }
            })
            .help()
            .alias('help', 'h')
            .argv;

const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response)=>{
    console.log(response.data);
});
