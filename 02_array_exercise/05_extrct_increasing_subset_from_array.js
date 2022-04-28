function solve(arr){
    let max = arr[0];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= max) {
            result.push(arr[i])
            max = arr[i];
        }
    }
    return result;
}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
))