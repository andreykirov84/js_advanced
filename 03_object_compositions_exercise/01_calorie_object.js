function solve(arr) {
    const result = {}
    for (let i = 0; i < arr.length - 1; i += 2) {
        const name = arr[i];
        result[name] = Number(arr[i + 1]);
    }
    return result;
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))
console.log(solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']))
