class MySet {
    #myTempArray = [];

    getArray() {
        return [...this.#myTempArray] // we are creating a clone of array.
    }
    push(value) {
        if (this.#myTempArray.includes(value) == false) {
            this.#myTempArray.push(value)
        }
    }
    length() {
        return this.#myTempArray.length
    }
    isEmpty() {
        return this.#myTempArray.length == 0
    }
}


let set1 = new MySet();
set1.push("A")
set1.push("B")
set1.push("B")
set1.push("B")
set1.push("C")

console.log(set1.getArray())

