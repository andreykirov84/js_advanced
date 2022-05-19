function validate() {
    let mailElement = document.getElementById('email');
    mailElement.addEventListener('change', onChange);

    function onChange(ev) {
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if (pattern.test(ev.target.value)) {
            ev.target.classList.remove('error');

        } else {
            ev.target.classList.add('error');
        }
    }
}