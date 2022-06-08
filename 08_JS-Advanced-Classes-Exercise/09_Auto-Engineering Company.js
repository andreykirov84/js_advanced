function solve(arr) {
    const data = {}

    arr.forEach(x => {
        const [brand, model, q] = x.split(' | ')

        data[brand] = data[brand] || {}
        data[brand][model] = data[brand][model] || 0
        data[brand][model] += Number(q)
    })

    return Object.entries(data).map(([brand, models]) => `${brand}
${Object.entries(models)
        .map(([model, quantity]) => `###${model} -> ${quantity}`)
        .join('\n')}`).join('\n')
}

console.log(solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
))