function smallestTwoNumbers(arr){
    arr.sort(function(a, b){return a-b});
    let one = arr.shift();
    arr.sort(function(a, b){return a-b});
    let two = arr.shift();
    console.log(one, two);
}

smallestTwoNumbers([30, 15, 50, 5])