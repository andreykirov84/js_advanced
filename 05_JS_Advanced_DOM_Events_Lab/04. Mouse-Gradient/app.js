function attachGradientEvents() {
    const box = document.getElementById('gradient');
    box.addEventListener('mousemove', onMove, false);

    function onMove(ev) {
        const boxWidth = ev.target.offsetWidth;
        const result = document.getElementById('result');
        let percentage = Math.floor(ev.offsetX / ev.target.clientWidth * 100)
        result.textContent = `${percentage}%`;
    }
}