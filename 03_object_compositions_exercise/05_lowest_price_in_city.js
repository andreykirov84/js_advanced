function solve(arr){
    let catalog = {};

    arr.forEach((el) => {
       let [town, product, price] = el.split(' | ');
       price = Number(price);

       if (!catalog[product]) {
           catalog[product] = {};
       }
       catalog[product][town] = price;
    });
    for (const el in catalog) {
        const sortedItems = Object.entries(catalog[el]).sort((a, b) => a[1] - b[1]);
        console.log(`${el} -> ${sortedItems[0][1]} (${sortedItems[0][0]})`);
    }
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 4',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)