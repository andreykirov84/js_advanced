function biggerHalf(arr){
    arr.sort(function(a, b){return a-b});
    arr.splice(0, Math.floor(arr.length / 2));
    return arr
}

console.log(biggerHalf([4, 7, 2, 5]))
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]))