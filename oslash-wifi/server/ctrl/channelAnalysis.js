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
    let wigleData = {
        url: `https://api.wigle.net/api/v2/network/search?onlymine=false&lastupdt=20170101&latrange1=${lat1}&latrange2=${lat2}&longrange1=${long1}&longrange2=${long2}&freenet=false&paynet=false&ssid=${FormatedSSID}`,
        headers: {'Authorization': BASIC_AUTH} 
    }
    return axios.get(wigleData.url, {headers: wigleData.headers}).then(res=>deDupLocation(res.data))
}

//removes duplicate MAC addresses aka obj.netid
function deDupMacAddress(res){
    let ssidListSepcific = res.results.filter(function (a) {
            return !this[a.netid] && (this[a.netid] = true);
        }, Object.create(null));
    return ssidListSepcific
}

//removes duplicate ssid's that are within .003 lat/lng of eachother       this one was a beast
function deDupLocation(res){
    let mappedData = res.results.map(((el)=>{
        return{
            trilat:el.trilat,
            trilong:el.trilong,
            netid:el.netid,
            channel:el.channel,
            //distanceValue is taking lat/lng and adding their absolute values together(going from a 2 dementional value, to a 1 dementional value)
                //this will not work if they are seaching in an area that has locations in multiple quadrents of lat/lng
            distanceValue:(Math.abs(Math.round(el.trilat * 10000)))+(Math.abs(Math.round(el.trilong * 10000)))}  
        }))
    //sorting smallest to largest
    mappedData.sort(function(a,b) {return (a.distanceValue > b.distanceValue) ? 1 : ((b.distanceValue > a.distanceValue) ? -1 : 0);} ); 
    //grouping items that are within .003 lat/lng (about 1000 feet or 300 meters)
    let groupedData = [];
    function dataGrouper(){
        let tempGroup = [];
        for(let i=0;i<mappedData.length;i++){
            let nextI = i+1;
            let dif = nextI === mappedData.length ?0 :mappedData[nextI].distanceValue - mappedData[i].distanceValue;
            if(dif < 30 ){
                tempGroup.push(mappedData[i])
            }
            else{
                tempGroup.push(mappedData[i]);
                groupedData.push(tempGroup);
                tempGroup = [];
            }
        }
        return tempGroup.length !==0 ?groupedData.push(tempGroup):groupedData
    }
    dataGrouper()
    let simplifiedData = ()=>{
        let returnArr = [];
        if(groupedData.length === 1){
            returnArr.push(groupedData[0][Math.round(groupedData[0].length/2)])
        }else{
        for(let i=0;i<groupedData.length;i++){
            groupedData[i].length === 1
                ?returnArr.push(groupedData[i][0])
                :groupedData[i].length !== 0
                    ?returnArr.push(groupedData[i][Math.round(groupedData[i].length/2)])
                    :null
        }}
        return returnArr
    }
    return simplifiedData()
}

function areaChannelRequest(obj){
    let lat1 = obj.trilat -.002,
        lat2 = obj.trilat +.002,
        long1 = obj.trilong -.002,
        long2 = obj.trilong +.002
    let wigleData = {
        //Referance URL with QOS set to 6 and variance set to .001
        //https://api.wigle.net/api/v2/network/search?onlymine=false&latrange1=40.22389493&latrange2=40.227894930000005&longrange1=-111.66332355&longrange2=-111.65932355000001&lastupdt=20170101&freenet=false&paynet=false&minQoS=6&variance=0.001

        url: `https://api.wigle.net/api/v2/network/search?onlymine=false&lastupdt=20170101&latrange1=${lat1}&latrange2=${lat2}&longrange1=${long1}&longrange2=${long2}&freenet=false&paynet=false`,
        headers: {'Authorization': BASIC_AUTH} 
    }
    return axios.get(wigleData.url, {headers: wigleData.headers}).then(res=>channelCounter(res.data))
}

function channelCounter(res){
    let frequecy2GHz = {};
    let frequecy5GHzDFS = {};
    let frequecy5GHzNonDFS = {};

    res.results.forEach(function(el) {
        el.channel<15
            ?frequecy2GHz[el.channel] = (frequecy2GHz[el.channel] || 0) +1
            :el.channel>50 && el.channel<144
                ?frequecy5GHzDFS[el.channel] = (frequecy5GHzDFS[el.channel] || 0) +1
                :frequecy5GHzNonDFS[el.channel] = (frequecy5GHzNonDFS[el.channel] || 0) +1
    })
    let channels = {
        allChannels: Object.assign({},frequecy2GHz,frequecy5GHzNonDFS,frequecy5GHzDFS),
        frequecy2GHz: frequecy2GHz,
        frequecy5GHzDFS: frequecy5GHzDFS,
        frequecy5GHzNonDFS: frequecy5GHzNonDFS
    }
    return channels
}

module.exports = {
    simpleUserInput: async(req,res) => {
        let returnedList = await getLocataion(req);
        res.status(200).send(returnedList);
    },
    areaChannelLookup: async(req,res) => {
        let channelList = await areaChannelRequest(req.body)
        res.status(200).send(channelList)
    },
    
}