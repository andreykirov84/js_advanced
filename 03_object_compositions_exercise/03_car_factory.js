function solve(car) {
    const engines = {
        'Small engine': {power: 90, volume: 1800},
        'Normal engine': {power: 120, volume: 2400},
        'Monster engine': {power: 200, volume: 3500},
    }
    let actualWheelsize;
    if (car.wheelsize % 2 === 0) {
        actualWheelsize = car.wheelsize - 1;
    } else {
        actualWheelsize = car.wheelsize;
    }

    const result = {
        model: car.model,
    }

    for (const engine of Object.values(engines)) {
        if (engine.power >= car.power) {
            result.engine = engine;
            break;
        }
    }

    result.carriage = {
        type: car.carriage,
        color: car.color,
    }

    result.wheels = []

    for (let i = 0; i < 4; i++) {
        result.wheels.push(actualWheelsize);
    }

    return result;
}

console.log(solve({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
))

console.log(solve({
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
))