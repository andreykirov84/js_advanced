class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        this.radius = value / 2;
    }

    get area() {
        return this.radius ** 2 * Math.PI;
    }
}

a = new Circle(5)
console.log(a.radius)
a.diameter = 20
console.log(a.radius)
console.log(a.diameter)
console.log(a.area)