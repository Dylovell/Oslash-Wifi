const {res} = require('./sampleDataMutilpleLocations')
    ,{res2} = require('./sampleDataDevmountain-internal')

function deDupLocation(res){
    
    let mappedData = res.results.map(((el)=>{
        return{
            trilat:el.trilat,
            trilong:el.trilong,
            netid:el.netid,
            distanceValue:(Math.abs(Math.round(el.trilat * 10000)))+(Math.abs(Math.round(el.trilong * 10000)))}
        }))
        
    mappedData.sort(function(a,b){
        a.distanceValue>b.distanceValue
        ?1 :((b.distanceValue>a.distanceValue) 
        ?-1 :0);
    });
        
    let simplifiedArea = [];

    let groupedIndexs = [];

    let ticker = 1;
    console.log(mappedData)
    mappedData.sort(function(a,b){
        (b.distanceValue - a.distanceValue) < 30 //.003 lat/lng
        ?simplifiedArea.push(a)
        :null

        ++ticker;
    })

    function returnArray(){
        // console.log(simplifiedArea)
        if(simplifiedArea.length === 0){  return mappedData}
        else{   return simplifiedArea}
    }
    
    return console.log(returnArray())
}

deDupLocation(res2)

//.004 ish is margin of error


// 40.2395   -111.6557
// 151.8952

// 40.2541   -111.6570
// 151.9111

// 40.2429   -111.6674
// 151.9103

// 40.2375   -111.6413
// 151.8788

// 40.2407   -111.6510
// 151.8917

// 40.2635   -111.6629
// 151.9264


// 1518871
// 1518882
// 1518870
// 1518873
// 1518870
// 1518863
// 1518872
// 1518879
// .004