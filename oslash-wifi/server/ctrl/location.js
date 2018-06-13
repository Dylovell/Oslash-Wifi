require('dotenv').config();
const axios = require('axios')

const {
    GEOCODING_KEY,
    BASIC_AUTH
} = process.env;

function loactionRefiner(obj ){
    let geoLocation = obj.results[0].geometry
    ssidCitySearch(geoLocation.southwest.lat, geoLocation.northeast.lat, geoLocation.southwest.lng, geoLocation.northeast.lng)
}

//https://api.wigle.net/api/v2/network/search?onlymine=false&latrange1=40.1857988&latrange2=40.328871&longrange1=-111.7409621&longrange2=-111.5368551&freenet=false&paynet=false&ssid=devmountain-internal


function ssidCitySearch(lat1,lat2,long1,long2,ssid){
    var authOptions = {
        method: 'GET',
        url: `https://api.wigle.net/api/v2/network/search?onlymine=false&latrange1=${lat1}&latrange2=${lat2}&longrange1=${long1}&longrange2=${long2}&freenet=false&paynet=false&ssid=${ssid}`,
        data: qs.stringify(data),
        headers: {
            'Authorization': 'BASIC_AUTH',
        } 
    }
}


module.exports = {
    getLocataion: (req, res) => {
        axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+req.body+'&key='+GEOCODING_KEY)
        .then(loactionRefiner(res))
        .then(res.status(200).send)
    }
}

