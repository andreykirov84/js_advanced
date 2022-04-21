function sameNumber(n) {
    const arr = `${n}`.split("")
    console.log(`${arr.every((x, i, arr1) => arr1.slice(i).every(y => x === y))}
${arr.map(Number).reduce((a, v) => a + v, 0)}`)
}

sameNumber(2222222)
sameNumber(1234)


