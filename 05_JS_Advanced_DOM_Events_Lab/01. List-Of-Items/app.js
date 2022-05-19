function addItem() {
    let liText = document.getElementById('newItemText');
    const list = document.querySelector('ul');
    const newLi = document.createElement('li');
    newLi.textContent = liText.value;
    list.appendChild(newLi);
    liText.value = '';
}