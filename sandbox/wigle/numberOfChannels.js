const res= JSON.stringify(res)

channelCounter = {}
res.results.forEach(function(el) {
    channelCounter[el.channel] = (channelCounter[el.channel] || 0) + 1
})

channelCounter
