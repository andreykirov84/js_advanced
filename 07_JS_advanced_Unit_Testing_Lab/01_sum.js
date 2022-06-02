function sumRange(array, start, end) {
    if (Array.isArray(array) === false){
        return NaN
    }

    if (end > array.length - 1) {
        end = array.length - 1;
    }
    if (start < 0) {
        start = 0
    }

    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += Number(array[i]);
    }

    return sum;
}

console.log(sumRange([10, 20, 30, 40, 50, 60], 3, 5))
console.log(sumRange([10, 20, 30, 40, 50, 60], 3, 300))
console.log(sumRange([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))
console.log(sumRange([10, 'twenty', 30, 40], 0, 2))
console.log(sumRange([], 1, 2))
console.log(sumRange('text', 0, 2))