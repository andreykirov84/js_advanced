function addItem() {
    let liText = document.getElementById('newItemText');
    const list = document.querySelector('ul');
    const newLi = document.createElement('li');
    newLi.textContent = liText.value;
    const button = document.createElement('a');
    button.href = '#';
    button.textContent = '[Delete]';
    button.addEventListener('click', removeElement);


    list.appendChild(newLi);
    newLi.appendChild(button);
    liText.value = '';

    function removeElement(ev) {
        const parent = ev.target.parentNode;
        parent.remove();
    }
}

