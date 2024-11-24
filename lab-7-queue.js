class Queue {
    #array 
    constructor(){
        this.#array = [];
    }
    enqueue(value) {
        this.#array.push(value)
    }
    dequeue() {
        if (this.isEmpty()) {
            throw "queue is empty"
        }
        return this.#array.shift()
    }
    head() {
        if (this.isEmpty()) {
            throw "queue is empty"
        }
        return this.#array[0]
    }
    tail() {
        if (this.isEmpty()) {
            throw "queue is empty"
        }
        return this.#array[this.size() - 1]
    }
    size() {
        return this.#array.length
    }
    isEmpty() {
        return this.size() == 0;
    }
    toArray() {
        return [...this.#array]
    }
}

// [10]

// its a collection
// insertion happens at the end of the collection
// deletion of the item happens from the front of the collection
// we should see the first item
// we need to know about the size of queue
// we need to know if the queue is empty


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
