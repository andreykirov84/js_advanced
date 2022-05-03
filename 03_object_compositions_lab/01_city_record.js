function solve(name, population, treasury) {
    return {
        name: name,
        population: population,
        treasury: treasury,
    }
}

function solve2(name, population, treasury) {
    return {
        name,
        population,
        treasury,
    }
}

console.log(solve('Tortuga',
    7000,
    15000
))

console.log(solve2('Tortuga',
    7000,
    15000
))