class Vec {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    plus(vector2) {
        let sumX = this.x + vector2.x
        let sumY = this.y + vector2.y
        return new Vec(sumX, sumY)
    }
    minus(vector2) {
        let minusX = this.x - vector2.x
        let minusY = this.y - vector2.y
        return new Vec(minusX, minusY)
    }
    get length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)))
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)))
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length)
// → 5
