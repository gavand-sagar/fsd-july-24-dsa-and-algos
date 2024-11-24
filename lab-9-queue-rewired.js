class Point {
    value;
    next;
    constructor(value, next) {
        this.value = value;
        this.next = next
    }
}

class Queue {
    #front;
    #tail;
    #length = 0
    /**
     *
     */
    constructor() {
        this.#front = null;
    }

    enqueue(value) {
        if (this.isEmpty()) {
            this.#front = new Point(value, null);
            this.#tail = this.#front;
            this.#length++;
            return;
        }

        let temp = this.#front;
        while (temp.next != null) {
            temp = temp.next
        }
        temp.next = new Point(value, null);
        this.#tail = temp.next
        this.#length++
    }

    dequeue() {
        if (this.isEmpty()) {
            throw "queue is empty"
        }
        let value = this.#front.value;
        this.#front = this.#front.next;
        this.#length--;
        if (this.#length == 0) {
            this.#tail = null;
        }
        return value;
    }

    head() {
        if (this.isEmpty()) {
            throw "queue is empty"
        }
        return this.#front.value
    }

    tail() {
        if (this.isEmpty()) {
            throw "queue is empty"
        }
        return this.#tail.value
    }

    size() {
        return this.#length
    }

    isEmpty() {
        return this.#length == 0
    }
}


let q = new Queue()
console.log(q.isEmpty()) // true
q.enqueue(5)
console.log(q.head()) // 5
q.enqueue(6)
console.log(q.head()) // 5
console.log(q.tail()) // 6
q.enqueue(7)
q.enqueue(8)
console.log(q.tail()) // 8
q.dequeue()
q.dequeue()
console.log(q.head()) // 7
console.log(q.tail()) // 8
