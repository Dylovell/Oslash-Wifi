require('dotenv').config();
const axios = require('axios')

const {
    GEOCODING_KEY,
    BASIC_AUTH
} = process.env;

//using req.body from client to get lat/lng square from Geocode api 
function getLocataion(userReq){
    let formatedLocation = userReq.body.location.replace(/ /g,"+");
    return axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+formatedLocation+'&key='+GEOCODING_KEY)
    .then((res)=>{
        let geoLocation = res.data.results[0].geometry.bounds
        return ssidCitySearch(geoLocation.southwest.lat, geoLocation.northeast.lat, geoLocation.southwest.lng, geoLocation.northeast.lng,userReq.body.ssid)
    })
}
//search for ssid from Wigle in specified area
function ssidCitySearch(lat1,lat2,long1,long2,ssid){
    let FormatedSSID = encodeURI(ssid)
    var wigleData = {
        url: `https://api.wigle.net/api/v2/network/search?onlymine=false&lastupdt=20170101&latrange1=${lat1}&latrange2=${lat2}&longrange1=${long1}&longrange2=${long2}&freenet=false&paynet=false&ssid=${FormatedSSID}`,
        headers: {'Authorization': BASIC_AUTH} 
    }
    return axios.get(wigleData.url, {headers: wigleData.headers}).then(res=>deDupMacAddress(res.data))
}
//removes duplicate MAC addresses aka obj.netid
function deDupMacAddress(res){
    let ssidListSepcific = res.results.filter(function (a) {
            return !this[a.netid] && (this[a.netid] = true);
        }, Object.create(null));
    return ssidListSepcific
}



module.exports = {
    simpleUserInput: async(req,res) => {
        var returnedList = await getLocataion(req);
        res.status(200).send(returnedList);
    },
    areaChannelLookup: async(req,res) => {
        res.status(200)
    }
    
}