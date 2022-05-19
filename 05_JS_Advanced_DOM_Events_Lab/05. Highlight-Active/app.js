function focused() {
    const fields = Array.from(document.getElementsByTagName('input'));
    for (let field of fields) {
        field.addEventListener('focus', getFocused);
        field.addEventListener('blur', getUnfocused);
    }
    function getFocused(event) {
        // event.target.parentNode.className = 'focused';
        event.target.parentNode.classList.add('focused');
    }
    function getUnfocused(event) {
        // event.target.parentNode.className = '';
        event.target.parentNode.classList.remove('focused');
    }
}