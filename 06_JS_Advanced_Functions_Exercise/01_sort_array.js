function solve(input, sort) {

    if (sort === 'asc'){
        return input. sort((a,b)=>a-b)
    }
    if (sort === 'desc'){
        return input. sort((a,b)=>b-a)
    }
}

console.log(solve([14, 7, 17, 6, 8], 'asc'))
console.log(solve([14, 7, 17, 6, 8], 'desc'))