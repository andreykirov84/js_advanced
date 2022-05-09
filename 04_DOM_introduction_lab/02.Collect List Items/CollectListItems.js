// function extractText() {
//     const items = document.getElementById('items').children;
//     const result = [];
//     for (const item of items) {
//         result.push(item.textContent);
//     }
//     document.getElementById('result').textContent = result.join('\n');
// }

function extractText() {
    const items = document.getElementById('items').children;
    const result = [];
    for (const item of Array.from(items)) {
        result.push(item.textContent);
    }
    //judge nqma opciq da iterirame HTML collection i za tova gi prevrashtame v array
    document.getElementById('result').value = result.join('\n');
}