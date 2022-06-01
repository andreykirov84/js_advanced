function argumentInfo(...args) {
    const count = {}
    const result = args.map(x => {
        count[typeof x] = (count[typeof x] || 0) + 1
        return `${typeof x}: ${x}`
    })

    result.forEach(x => console.log(x))
    Object.entries(count).sort((x,y) => y[1] - x[1]).map(([type, counts]) =>
        console.log(`${type} = ${counts}`)
    )
}

function solve(...args) {
    const result = new Map();
    for (const arg of args) {
        const type = typeof arg
        if (!result.has(type)) {
            result[type] = [arg,];
        }
        else {
            result[type].push(arg)
        }
    }
    console.log(result);
}

// solve('cat', 42, function () { console.log('Hello world!'); })
argumentInfo('cat', 42, function () { console.log('Hello world!'); })

