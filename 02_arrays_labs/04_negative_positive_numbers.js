function negative_positive(arr){
    let result = [];
    for (let number of arr) {
        if (number < 0){
            result.unshift(number);
        }
        else {
            result.push(number);
        }
    }
    console.log(result.join('\n'))
}

negative_positive([7, -2, 8, 9])