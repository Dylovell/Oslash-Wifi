require('dotenv').config();
const axios = require('axios')
    ,bodyParser = require('body-parser')
    ,express = require('express')

const app = express();
app.use(bodyParser.json())

const {
    GEOCODING_KEY,
    BASIC_AUTH
} = process.env;

//using pram from client to get lat/lng square from Geocode api 
function getLocataion(userReq){
    let formatedLocation = userReq.body.location.replace(/ /g,"+");
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+formatedLocation+'&key='+GEOCODING_KEY)
    .then((res)=>{
        let geoLocation = res.data.results[0].geometry.bounds
        ssidCitySearch(geoLocation.southwest.lat, geoLocation.northeast.lat, geoLocation.southwest.lng, geoLocation.northeast.lng,userReq.body.ssid)
    })
}
//
function ssidCitySearch(lat1,lat2,long1,long2,ssid){
    let FormatedSSID = encodeURI(ssid)
    var wigleData = {
        url: `https://api.wigle.net/api/v2/network/search?onlymine=false&lastupdt=20180101&latrange1=${lat1}&latrange2=${lat2}&longrange1=${long1}&longrange2=${long2}&freenet=false&paynet=false&ssid=${FormatedSSID}`,
        headers: {'Authorization': BASIC_AUTH} 
    }
    axios.get(wigleData.url, {headers: wigleData.headers}).then(res=>deDup(res.data))
}

function deDup(res){
    var ssidListSepcific = res.results.filter(function (a) {
            return !this[a.netid] && (this[a.netid] = true);
        }, Object.create(null));
    return console.log(ssidListSepcific)
}




// getLocataion({body:{location:'provo utah',ssid:'devmountain, internal'}})

module.exports = {
    simpleUserInput: (req,res) => {
        getLocataion(req.body);
        res.status(200)
    }
    
}