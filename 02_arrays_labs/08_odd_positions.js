function oddFunc(arr) {
    const result = []
    for (let i = 1; i < arr.length; i += 2) {
        result.push(arr[i] * 2)
    }
    result.reverse()
    console.log(result.join(' '))
}

oddFunc([10, 15, 20, 25])

function oddFunc2(arr) {
    const odd = arr.filter((v, i) => i % 2 === 1);
    const result = odd.map(x => x * 2);
    result.reverse()
    console.log(result.join(' '))
}

oddFunc2([10, 15, 20, 25])

function oddFunc3(arr) {
    console.log(arr
        .filter((v, i) => i % 2 === 1)
        .map(x => x * 2)
        .reverse()
        .join(' '));
}

oddFunc3([10, 15, 20, 25])