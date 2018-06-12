// let deDup = _.uniqBy(res.results, [iteratee=_.identity])


var deDup = res.results.filter(function (a) {
    return !this[a.netid] && (this[a.netid] = true);
}, Object.create(null));

let onlyRoad = deDup.map(function(el){ return (el.road+', '+el.city+'     channel: '+el.channel)})

