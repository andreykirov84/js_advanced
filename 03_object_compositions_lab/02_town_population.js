function solve(arr){
    const cities = {};
    for (let element of arr){
        let pair = element.split(' <-> ');
        const key = pair[0];
        const value = Number(pair[1]);
        if (cities[key] !== undefined){
            cities[key] += value;
        } else {
            cities[key] = value;
        }
    }
    for (const [name, pop] of Object.entries(cities)){
        console.log(`${name} : ${pop}`)
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)