class Rectangle {
    #length;
    #height;
    constructor(length, height) {
        if (typeof (length) != "number") {
            throw "lenght is not a number"
        }
        if (typeof (height) != "number") {
            throw "lenght is not a number"
        }
        if (length < 0) {
            throw "lenght should not be negetive"
        }
        if (height < 0) {
            throw "height should not be negetive"
        }

        this.#height = height;
        this.#length = length
    }
    getLength() {
        if (this.#length == undefined) {
            throw "length is undefined"
        } else {
            return this.#length
        }
    }
    getHeight() {
        if (this.#height == undefined) {
            throw "height is undefined"
        } else {
            return this.#height
        }
    }
    getArea() {
        return this.getLength() * this.getHeight()
    }
    getCircumferance() {
        return 2 * (this.getLength() + this.getHeight())
    }
}


let r1 = new Rectangle(4, 5);

let area = r1.getArea()
let c = r1.getCircumferance();

console.log("Area", area)
console.log("Circumferance", c)

