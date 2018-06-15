const {res} = require('./sampleDataMutilpleLocations')
    ,{res2} = require('./sampleDataDevmountain-internal')

function deDupLocation(res){
    let simplifiedArea = {};

    let mappedData = res.results.map((el=>{
        return{
            netid:el.netid,
            distanceValue:(Math.abs(Math.round(el.trilat * 10000)))+(Math.abs(Math.round(el.trilong * 10000)))}
    }))

    let sequentailMappedData = mappedData.sort(function(a,b){
        return (a.distanceValue>b.distanceValue) 
        ?1 :((b.distanceValue>a.distanceValue) 
        ?-1 :0);
    });
    
    for(let i=0;i>sequentailMappedData.length; i++){
        i.distanceValue - (++i).distanceValue >40 //this is .004 lat/lng
        ?Object.assign({},simplifiedArea,sequentailMappedData[i])
        :null
    }
    return console.log(simplifiedArea)
}

deDupLocation(res2)

//.004 is margin of error


40.2395   -111.6557
151.8952

40.2541   -111.6570
151.9111

40.2429   -111.6674
151.9103

40.2375   -111.6413
151.8788

40.2407   -111.6510
151.8917

40.2635   -111.6629
151.9264


1518871
1518882
1518870
1518873
1518870
1518863
1518872
1518879
.004