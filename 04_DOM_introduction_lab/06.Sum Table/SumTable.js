function sumTable() {
    let result = 0;
    const rows = document.querySelectorAll('table tr');
    for (let i = 1; i < rows.length - 1; i++) {
        const cell = rows[i].lastElementChild;
        result += Number(cell.textContent);
    }
    document.getElementById('sum').textContent = result;
}