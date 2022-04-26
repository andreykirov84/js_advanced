function roadRadar(speed, area){
    let speedLimit = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    }
    if (speed <= speedLimit[area]){
        console.log(`Driving ${speed} km/h in a ${speedLimit[area]} zone`)
    } else {
        let comment;
        let speedDif = speed - speedLimit[area];
        if (speedDif <= 20) {
            comment = 'speeding';
        } else if (20 < speedDif && speedDif <= 40) {
            comment = 'excessive speeding';
        } else {
            comment = 'reckless driving';
        }
        console.log(`The speed is ${speedDif} km/h faster than the allowed speed of ${speedLimit[area]} - ${comment}`)
    }
}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')
