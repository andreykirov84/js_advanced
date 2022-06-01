function solve(command) {
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavours: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavours: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavours: 3,
        },
        eggs: {
            carbohydrate: 5,
            fat: 1,
            flavours: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavours: 10,
        },
    }

    const storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavours: 0,
    }

    const arr = command.split(' ')
    const operation = arr[0]
    if (operation === 'report') {
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavours}`
    }
    else if(operation === 'restock'){
        const element = arr[1];
        const quantity = Number(arr[2]);
        restock(element, quantity)
    }
    else if(operation === 'prepare'){
        const recipe = arr[1];
        const quantity = Number(arr[2]);
        prepare(recipe, quantity)
    }

    function restock(element, quantity) {
        storage[element] += quantity;
        return "Success "
    }

    function prepare(recipe, quantity){
        for (const element of recipes[recipe]) {
            if (storage[element] < quantity * recipes[recipe][element]){
            return `Error: not enough ${element} in stock `}
            storage[element] -= quantity * recipes[recipe][element]
        }
        return `Success`
    }
}

let manager = solve;
console.log (manager ("restock flavour 50")); // Success
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock



// console.log(solve('report'))
// solve('restock fat 10')
// console.log(solve('report'))


