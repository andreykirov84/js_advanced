function maxElement(matrix){
    console.log(matrix
        .flat(Infinity)
        .reduce(function(a, b) {return Math.max(a, b)})
        )
}


maxElement([[20, 50, 10],
    [8, 33, 145]]
)

maxElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
)