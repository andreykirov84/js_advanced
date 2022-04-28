function equalNumbers(matrix) {
    let result = 0;
    for (let i = 0; i < matrix.length - 1; i++) {
        let line = matrix[i];
        for (let j = 0; j < line.length - 1; j++) {
            if (line[j] === line[j + 1]) {
                result += 1;
            }
            if (matrix[i][j] === matrix[i + 1][j]) {
                result += 1;
            }
        }
    }
    console.log(result);
}

equalNumbers(
    [['2', '3', '4', '7', '0'],
        ['4', '0', '5', '3', '4'],
        ['2', '3', '5', '4', '2'],
        ['9', '8', '7', '5', '4']]
)

equalNumbers(
    [['test', 'yes', 'yo', 'ho'],
        ['well', 'done', 'yo', '6'],
        ['not', 'done', 'yet', '5']]
)
