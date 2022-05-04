function solve(arr){
    let catalog = {};

    arr.forEach((el) => {
        let [product, price] = el.split(' : ');
        price = Number(price);
        let firstLetter = product.slice(0, 1)
        if (!catalog[firstLetter]) {
            catalog[firstLetter] = {};
        }
        catalog[firstLetter][product] = price;
    })
    let sortedCatalogue = {}
    for (const el in catalog) {
        sortedCatalogue[el] = Object.entries(catalog[el]).sort((a, b) => a[0].localeCompare(b[0]))
    }
    sortedCatalogue = sortOnKeys(sortedCatalogue)
    {
        for (const item in sortedCatalogue) {
            console.log(item)
            sortedCatalogue[item].forEach(element => console.log(`  ${element[0]}: ${element[1]}`))
        }}
}

function sortOnKeys(dict) {
    let sorted = [];
    for(let key in dict) {
        sorted[sorted.length] = key;
    }
    sorted.sort();

    let tempDict = {};
    for(let i = 0; i < sorted.length; i++) {
        tempDict[sorted[i]] = dict[sorted[i]];
    }

    return tempDict;
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)