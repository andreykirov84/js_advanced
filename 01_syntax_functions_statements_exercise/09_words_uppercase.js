function wordUpperCase(text){
    const regexp = '\\w+'
    const array = text.matchAll(regexp);
    let result = [];
    for (const item of array) {
        result.push(item[0].toUpperCase());
    }
    console.log(result.join(', '))
}

wordUpperCase('Hi, how are you?')