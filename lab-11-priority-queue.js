class PriorityQueue {

    #array = []
    enqueue(value, priority = 0) {
        const obj = { value, priority }
        this.#array.push(obj);
        this.#array.sort((a, b) => b.priority - a.priority)
    }
    dequeue() {
        if (this.isEmpty()) {
            throw "empty queue"
        }
        let firstItem = this.#array.shift();
        return firstItem.value;
    }
    head() {
        if (this.isEmpty()) {
            throw "empty queue"
        }
        let firstItem = this.#array[0];
        return firstItem.value;
    }
    size() {
        return this.#array.length
    }
    isEmpty() {
        return this.size() == 0;
    }
    valuesToArray() {
        return this.#array.map(x => x.value)
    }
    insertAtFront(value) {
        const firstElement = this.#array.at(0)
        const obj  ={value,priority: firstElement.priority }
        this.#array.unshift(obj)
    }
}


let q = new PriorityQueue();

q.enqueue("Apple", 0)
q.enqueue("Banana", 2)
q.enqueue("Mango", 0)
q.enqueue("Kiwi", 0)


q.insertAtFront("Orange")
q.insertAtFront("Grape")

q.enqueue("PineApple",3)
console.log(q.valuesToArray())