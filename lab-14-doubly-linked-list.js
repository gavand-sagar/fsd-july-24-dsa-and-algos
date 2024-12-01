class Point {
    value;
    prev;
    next;
    constructor(value, prev, next) {
        this.value = value
        this.prev = prev
        this.next = next
    }
}

class DoublyLinkedList {
    #head;
    #tail;
    #length = 0;

    prepend(value) {
        if (this.isEmpty()) {
            let newPoint = new Point(value);
            this.#head = newPoint;
            this.#tail = newPoint;
            this.#length++;
        } else {
            let newPoint = new Point(value);
            this.#head.prev = newPoint;
            newPoint.next = this.#head;
            this.#head = newPoint;
            this.#length++;
        }
    }

    append(value) {
        if (this.isEmpty()) {
            let newPoint = new Point(value);
            this.#head = newPoint;
            this.#tail = newPoint;
            this.#length++;
        } else {
            let newPoint = new Point(value);
            // new point's prev will be tail
            newPoint.prev = this.#tail
            // tail's next will be new point
            this.#tail.next = newPoint;
            // new point will be the tail
            this.#tail = newPoint;
            this.#length++;
        }
    }

    //remove from tail
    pop() {
        if (this.isEmpty()) {
            return;
        }
        if (this.size() == 1) {
            this.#head = null;
            this.#tail = null;
            this.#length = 0;
        } else {
            this.#tail = this.#tail.prev;
            this.#tail.next = null;
            this.#length--;
        }
    }
    //remove from head
    shift() {
        if (this.isEmpty()) {
            return;
        }
        if (this.size() == 1) {
            this.#head = null;
            this.#tail = null;
            this.#length = 0;
        } else {
            this.#head = this.#head.next;
            this.#head.prev = null;
            this.#length--
        }
    }
    isEmpty() {
        return this.size() == 0;
    }
    size() {
        return this.#length;
    }
    printForward() {
        console.log("")
        console.log("------------------------")
        let temp = this.#head;
        while (temp) {
            console.log(temp.value);
            temp = temp.next;
        }
        console.log("------------------------")
        console.log("")

    }
    printBackward() {
        console.log("")
        console.log("------------------------")
        let temp = this.#tail;
        while (temp) {
            console.log(temp.value);
            temp = temp.prev;
        }
        console.log("------------------------")
        console.log("")
    }

    findValueAt(index) {
        const midIndex = this.size() / 2;
        if (index > midIndex) {
            return this.#findValueFromRight(index)
        } else {
            return this.#findValueFromLeft(index)
        }
    }

    #findValueFromLeft(index) {
        console.log("finding from left")
        let temp = this.#head;
        let counter = 0;
        while (temp) {
            if (counter == index) {
                return temp.value
            }
            temp = temp.next;
            counter++
        }
    }

    #findValueFromRight(index) {
        console.log("finding from right")
        let temp = this.#tail;
        let counter = this.#length - 1;
        while (temp) {
            if (counter == index) {
                return temp.value
            }
            temp = temp.prev;
            counter--
        }
    }

}


let ll = new DoublyLinkedList();
ll.append(5)
ll.append(6)
ll.append(7)
ll.append(8)
ll.append(9)
ll.append(10)
ll.append(12)
ll.append(13)
ll.printForward();

const indexTofind = 6
console.log(`element at [${indexTofind}] : ${ll.findValueAt(indexTofind)}`)