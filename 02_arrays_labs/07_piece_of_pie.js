function pieceOfPie(arr, firstItem, secondItem){
    const firstIndex = arr.indexOf(firstItem);
    const secondIndex = arr.indexOf(secondItem);
    return arr.slice(firstIndex,  secondIndex + 1)
}

console.log(pieceOfPie(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
))