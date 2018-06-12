// const res= JSON.stringify(res)
import res from './sampleData100'


frequecy2GHz = {};
frequecy5GHz = {};

res.results.forEach(function(el) {
    el.channel<15
    ?frequecy2GHz[el.channel] = (frequecy2GHz[el.channel] || 0) +1
    :frequecy5GHz[el.channel] = (frequecy5GHz[el.channel] || 0) +1
})

allChannels = Object.assign({},frequecy2GHz,frequecy5GHz)
