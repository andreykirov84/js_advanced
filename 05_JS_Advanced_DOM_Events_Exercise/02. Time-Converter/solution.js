// function attachEventsListeners() {
//     const inSeconds = {
//         days: 86400,
//         hours: 3600,
//         minutes: 60,
//         seconds: 1,
//     }
//     const daysInput = document.getElementById('days');
//     const hoursInput = document.getElementById('hours');
//     const minutesInput = document.getElementById('minutes');
//     const secondsInput = document.getElementById('seconds');
//
//     document.getElementById('daysBtn').addEventListener('click', onConvert);
//     document.getElementById('hoursBtn').addEventListener('click', onConvert);
//     document.getElementById('minutesBtn').addEventListener('click', onConvert);
//     document.getElementById('secondsBtn').addEventListener('click', onConvert);
//
//
//     function onConvert(ev){
//         const input = ev.target.parentElement.querySelector('input[type="text"]');
//         const value = input.value;
//         const units = input.id;
//         const seconds = value * inSeconds[units]
//         return {
//             days: seconds / inSeconds.days,
//             hours: seconds / inSeconds.hours,
//             minutes: seconds / inSeconds.minutes,
//             seconds: seconds / inSeconds.seconds,
//         };
//     }
//
// }


function attachEventsListeners() {
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', function() {
        let days = daysInput.value;
        hoursInput.value = days * 24;
        minutesInput.value = days * 1440;
        secondsInput.value = days * 86400;
    });

    hoursBtn.addEventListener('click', function() {
        let hours = hoursInput.value;
        daysInput.value = hours / 24;
        minutesInput.value = hours * 60;
        secondsInput.value = hours * 60 * 60;
    });

    minutesBtn.addEventListener('click', function() {
        let minutes = minutesInput.value;
        hoursInput.value = minutes / 60;
        daysInput.value = minutes / 60 / 24;
        secondsInput.value = minutes * 60;
    });

    secondsBtn.addEventListener('click', function() {
        let seconds = secondsInput.value;
        hoursInput.value = seconds / 60 / 60;
        minutesInput.value = seconds / 60;
        daysInput.value = seconds / 60 / 60 / 24;
    });
}