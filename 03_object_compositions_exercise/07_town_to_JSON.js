function solve(arr){
    let result = [];
    for (let i = 1; i < arr.length; i++) {
        let [_, townName, longValue, latValue] = arr[i].split('|')
        townName = townName.trim()
        longValue = Number(Number(longValue.trim()).toFixed(2));
        latValue = Number(Number(latValue.trim()).toFixed(2));
        const object = {
            Town : townName,
            Latitude : longValue,
            Longitude : latValue,
        }
        result.push(object);
    }
    return JSON.stringify(result);
}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
))