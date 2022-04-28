function diagonalSum(matrix) {
    const last = matrix.length - 1
    let primary = 0;
    let secondary = 0;

    for (let i = 0; i < matrix.length; i++) {
        primary += matrix[i][i];
        secondary += matrix[i][last - i]
    }
    console.log(`${primary} ${secondary}`)
}

diagonalSum([[20, 40],
                    [10, 60]]
)