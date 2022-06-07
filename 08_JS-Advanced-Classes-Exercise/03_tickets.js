function solve(arr, sortBy) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let result = []
    for (const element of arr) {
        const [destination, price, status] = element.split('|');
        const ticket = new Ticket(destination, Number(price), status);
        result.push(ticket);
    }
    if (sortBy === 'price') {
        return result.sort((a, b) => a.price-b.price)
    } else {
        return result.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
    }
}

x = solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
)
console.log(x)