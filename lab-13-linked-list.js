class Point {
    value;
    next;
    constructor(_value, _next) {
        this.value = _value;
        this.next = _next;
    }
    displayChain() {
        console.log(this.value)
        if (this.next) {
            this.next.displayChain();
        }
    }
    toArray(array = []) {
        array.push(this.value)
        if (this.next) {
            return this.next.toArray(array);
        }
        return array
    }
}

class LinkedList {
    #head = null;
    #length = 0;

    insertAt(index, value) {
        if (index < 0) {
            throw "index cannot be negetive"
        }

        if (index > this.size()) {
            throw "index cannot be greater than size"
        }

        if (index == 0) {
            this.#head = new Point(value, this.#head)
            this.#length ++
            return;
        }

        let prevObj = this.#getElementAt(index - 1)
        let oldNext = prevObj.next;
        prevObj.next = new Point(value, oldNext);
        this.#length ++
    }

    removeAt(index) {
        if (index < 0) {
            throw "index cannot be negetive"
        }
        if (index >= this.size()) {
            throw "index cannot be greater than or equals to size"
        }

        if (index == 0) {
            this.#head = this.#head.next;
            this.#length--;
            return;
        }

        let prevObj = this.#getElementAt(index - 1);
        let currentObj = prevObj.next;
        let nextObj = currentObj.next;
        
        prevObj.next = nextObj
        this.#length--;

    }

    #getElementAt(index) {
        if (index < 0 || index > this.size() - 1) {
            return null;
        }

        let counter = 0
        let tempHead = this.#head;
        while (tempHead != null) {
            if (counter == index) {
                return tempHead;
            }
            counter++;
            tempHead = tempHead.next;
        }
        return null
    }

    toArray() {
        if (this.size() > 0) {
            return this.#head.toArray()
        } else {
            return []
        }
    }

    size() {
        return this.#length
    }

    isEmpty() {
        return this.size() == 0
    }
}


let ll = new LinkedList();
ll.insertAt(0, 56)
ll.insertAt(1, 78)
ll.insertAt(2, 80)
ll.insertAt(3, 90)
ll.insertAt(4, 100)

console.log(ll.toArray())
ll.removeAt(5)
console.log(ll.toArray())
