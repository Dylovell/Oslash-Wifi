// const res= JSON.stringify(res)
const {res} = require('./sampleData100')


frequecy2GHz = {};
frequecy5GHzDFS = {};
frequecy5GHzNonDFS = {};

res.results.forEach(function(el) {
    el.channel<15
    ?frequecy2GHz[el.channel] = (frequecy2GHz[el.channel] || 0) +1
    :el.channel>50 && el.channel<144
    ?frequecy5GHzDFS[el.channel] = (frequecy5GHzDFS[el.channel] || 0) +1
    :frequecy5GHzNonDFS[el.channel] = (frequecy5GHzNonDFS[el.channel] || 0) +1
})

allChannels = Object.assign({},frequecy2GHz,frequecy5GHzNonDFS,frequecy5GHzDFS);

console.log(frequecy5GHzNonDFS)
