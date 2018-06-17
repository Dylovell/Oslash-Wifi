const {res} = require('./sampleDataMutilpleLocations')
    ,{res2} = require('./sampleDataDevmountain-internal')
    ,{res100} = require('./sampleData100')
    ,{resLDS} = require('./sampledataLdsProvo')

function deDupLocation(res){
    
    let mappedData = res.results.map(((el)=>{
        return{
            trilat:el.trilat,
            trilong:el.trilong,
            netid:el.netid,
            channel:el.channel,
            distanceValue:(Math.abs(Math.round(el.trilat * 10000)))+(Math.abs(Math.round(el.trilong * 10000)))}
        }))
    mappedData.sort(function(a,b) {return (a.distanceValue > b.distanceValue) ? 1 : ((b.distanceValue > a.distanceValue) ? -1 : 0);} ); 

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
        for(let i=0;i<groupedData.length;i++){
            groupedData[i].length === 1
                ?returnArr.push(groupedData[i][0])
                :groupedData[i].length !== 0
                    ?returnArr.push(groupedData[Math.round(groupedData.length/2)][0])
                    :null
        }
        return returnArr
    }

    
    return console.log(simplifiedData())
}

deDupLocation(resLDS)

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