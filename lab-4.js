class Rectangle {
    #length;
    #height;
    setLength(l) {
        if (l >= 0) {
            this.#length = l
        } else {
            throw "length Cannot be Negetive."
        }
    }
    setHeight(h) {
        if (h >= 0) {
            this.#height = h
        } else {
            throw "height Cannot be Negetive."
        }
    }
    getLength() {
        if (this.#length == undefined) {
            throw "length is undefined"
        }else{
            return this.#length
        }
    }
    getHeight() {
        if (this.#height == undefined) {
            throw "height is undefined"
        }else{
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


let r1 = new Rectangle();

r1.setLength(4)
r1.setHeight(5)

let area = r1.getArea()
let c = r1.getCircumferance();

console.log("Area", area)
console.log("Circumferance", c)

