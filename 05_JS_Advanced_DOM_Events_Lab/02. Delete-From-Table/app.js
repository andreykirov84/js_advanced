// function deleteByEmail() {
//     let input = document.querySelector('input[name="email"]')
//     const rows = Array.from(document.querySelector('tbody').children);
//     const result = document.getElementById('result')
//     for (const row of rows) {
//         if (row.children[1].textContent === input.value) {
//             row.remove();
//             result.textContent = 'Deleted.';
//         }
//     }
//     input.value = ''
//     if (result.textContent !== 'Deleted.') {
//         result.textContent = 'Not found.'
//     }
// }
// Solution 2
function deleteByEmail() {
    let input = document.querySelector('input[name="email"]')
    const rows = Array
        .from(document.querySelector('tbody').children)
        .filter(row => row.children[1].textContent === input.value);
    rows.forEach(row => row.remove());

    const result = document.getElementById('result')
    result.textContent = rows.length > 0 ? 'Deleted.' : 'Not found.';

    input.value = ''

}