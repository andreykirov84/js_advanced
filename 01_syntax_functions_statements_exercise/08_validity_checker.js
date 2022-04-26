function validityChecker(x1, y1, x2, y2) {
    let distance_x = x2 - x1
    let distance_y = y2 - y1
    let distance_1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2))
    let distance_2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2))
    let distance_3 = Math.sqrt(Math.pow(distance_x, 2) + Math.pow(distance_y, 2))
    // The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}.


    let comment1 = Number.isInteger(distance_1) ? 'valid' : 'invalid'
    let comment2 = Number.isInteger(distance_2) ? 'valid' : 'invalid'
    let comment3 = Number.isInteger(distance_3) ? 'valid' : 'invalid'
    console.log(`{${x1}, ${y1}} to {0, 0} is ${comment1}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${comment2}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${comment3}`);
}

validityChecker(3, 0, 0, 4)
validityChecker(2, 1, 1, 1)