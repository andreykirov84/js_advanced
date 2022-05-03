function solve(arr) {
    const result = [];
    for (const element of arr) {
        let [name, level, items] = element.split(' / ')
        const hero = {
            name,
            level: Number(level),
        }
        hero.items = items ? items.split(', ') : []
        result.push(hero)
    }
    return JSON.stringify(result)
}

console.log(solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
))