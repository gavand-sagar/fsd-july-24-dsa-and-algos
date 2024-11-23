class Circle {
    #radius;
    constructor(r) {
        if (r == undefined) {
            throw "radius is undefined"
        }
        if (typeof(r) != "number") {
            throw "radius must be number"
        }
        if (isNaN(r)) {
            throw "radius is NaN"
        }
        if (r < 0) {
            throw "radius is negetive"
        }
        
        this.#radius = r;
    }
    getRadius() {
        if (this.#radius) {
            return this.#radius;
        } else {
            throw "Radius is undefined"
        }
    }
    getDiameter() {
        return this.getRadius() * 2
    }
    getCircumferance() {
        return Math.PI * getDiameter();
    }
    getArea() {
        return Math.PI * this.getRadius() * this.getRadius();
    }
}

let c = new Circle(89);
//c.setRadius(3)
console.log(c.getDiameter())

