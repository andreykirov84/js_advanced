function solve(arr, rotates){
    for (let i = 0; i < rotates; i++) {
        let element = arr.pop();
        arr.unshift(element);
    }
    console.log(arr.join(' '));
}

solve(['1',
        '2',
        '3',
        '4'],
    2
)