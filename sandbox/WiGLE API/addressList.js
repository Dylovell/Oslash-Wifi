import res from './sampleData100'

let roadList = res.results.map(function(el){
    return (el.road+', '+el.city+'   LastSeen:'+el.lastupdt)
})

roadList;
