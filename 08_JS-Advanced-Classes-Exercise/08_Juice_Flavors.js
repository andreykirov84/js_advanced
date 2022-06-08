function solve(arr) {
    const juices = {}
    const result = {}
    for (const element of arr) {
        const name = element.split(' => ')[0]
        const value = Number(element.split(' => ')[1])
        if (name in juices) {
            juices[name] += value
        } else {
            juices[name] = value
        }
        if (juices[name] >= 1000) {
            let bottles = Math.floor(juices[name] / 1000)
            juices[name] -= bottles * 1000
            if (name in result) {
                result[name] += bottles
            } else {
                result[name] = bottles
            }
        }

    }
    let finalStr = ''
    for (const element of Object.entries(result)) {
        const [name, value] = element
        finalStr += `${name} => ${value}\n`
    }
    return finalStr;
}


console.log(solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']))
