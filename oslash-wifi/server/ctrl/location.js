require('dotenv').config();
const axios = require('axios')

const {
    GEOCODING_KEY
} = process.env;

function loactionRefiner(obj){
    obj.results
}



module.exports={
    getLocataion: (req, res) => {
        axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+req.body+'&key='+GEOCODING_KEY)
        .then(loactionRefiner(res))
        .then(res.status(200).send)
    }
}

