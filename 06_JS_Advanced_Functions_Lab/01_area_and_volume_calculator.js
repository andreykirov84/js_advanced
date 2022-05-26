function solve(area, vol, input) {
    const cubes = JSON.parse(input);
    const result = [];

    for (const cube of cubes) {
        const cubeArea = area.apply(cube)
        const cubeVolume = vol.apply(cube)

        result.push({
            area: cubeArea,
            volume: cubeVolume
        })
    }
    return result;
}


function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}

const data = `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`

console.log(solve(area, vol, data));
