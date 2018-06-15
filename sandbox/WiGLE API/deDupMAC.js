
function deDupMacAddress(res){
    let ssidListSepcific = res.results.filter(function (a) {
            return !this[a.netid] && (this[a.netid] = true);
        }, Object.create(null));
    return ssidListSepcific
}
