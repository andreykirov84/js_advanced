function timeToWalk(steps, step_length, speed){
    const rest_time = 60;
    let distance_in_m = steps * step_length;
    let speed_in_m = speed / 3.6;
    let time_in_s = distance_in_m / speed_in_m;
    let rests = Math.floor(distance_in_m / 500);
    time_in_s +=rests * rest_time
    time_in_s = Math.ceil(time_in_s)
    let timeStr = new Date(time_in_s * 1000).toISOString() // multiply by 1000 because Date() requires miliseconds
    console.log(timeStr.substring(11, 19))
}

// timeToWalk(4000, 0.60, 5)
// timeToWalk(2564, 0.70, 5.5)
//
// function timeToWalk2(steps, step_length, speed){
//     const rest_time = 60;
//     let distance_in_m = steps * step_length;
//     let speed_in_m = speed / 3.6;
//     let time_in_s = distance_in_m / speed_in_m;
//     let rests = Math.floor(distance_in_m / 500);
//     time_in_s +=rests * rest_time
//     time_in_s = Math.ceil(time_in_s)
//     let hours = Math.floor(time_in_s / 3600)
//     if (hours !== 0){
//         time_in_s -= hours * 3600
//     }
//     let minutes = Math.floor(time_in_s / 60)
//     if (minutes !== 0){
//         time_in_s -= minutes * 60
//     }
//     console.log(`${hours}:${minutes}:${time_in_s}`)
// }
//
// timeToWalk2(2564, 0.70, 5.5)