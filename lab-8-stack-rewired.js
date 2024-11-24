class Point {
    value;
    next;
    constructor(value, next) {
        this.value = value;
        this.next = next
    }
}

class MyStack {
    #tail = null;
    #length = 0

    push(value) {
        let oldTail = this.#tail;
        this.#tail = new Point(value, oldTail);
        this.#length++;
    }

    pop() {
        if (this.#length == 0) {
            throw "Stack is already empty"
        }
        let nextItem = this.#tail.next;
        let value = this.#tail.value
        this.#tail = nextItem;
        this.#length--;
        return value;
    }

    peek() {
        if (this.#length == 0) {
            throw "Stack is empty"
        }
        return this.#tail.value
    }

    size() {
        return this.#length
    }

    isEmpty() {
        return this.size() == 0;
    }
}



let s = new MyStack();

console.log(s.isEmpty()) // true

s.push(6)
console.log(s.isEmpty()) // false
s.push(7)

console.log(s.peek()) // 7

console.log(s.pop()) // 7
console.log(s.peek()) // 6
console.log(s.pop()) // 6
console.log(s.isEmpty()) // true