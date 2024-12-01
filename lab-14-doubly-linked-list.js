class Point {
    value;
    prev;
    next;
    constructor(value, prev, next) {
        this.value = value
        this.prev = prev
        this.next = next
    }
    toArray(array = []) {
        array.push(this.value)
        if (this.next) {
            return this.next.toArray(array);
        }
        return array
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
        const point = this.#findPointAt(index);
        if (point) {
            return point.value
        }
    }
    #findPointAt(index) {
        const midIndex = this.size() / 2;
        if (index > midIndex) {
            return this.#findValueFromRight(index)
        } else {
            return this.#findValueFromLeft(index)
        }
    }
    #findValueFromLeft(index) {
        let temp = this.#head;
        let counter = 0;
        while (temp) {
            if (counter == index) {
                return temp
            }
            temp = temp.next;
            counter++
        }
    }
    #findValueFromRight(index) {
        let temp = this.#tail;
        let counter = this.#length - 1;
        while (temp) {
            if (counter == index) {
                return temp
            }
            temp = temp.prev;
            counter--
        }
    }
    insertAt(index, value) {
        if (index < 0 || index > this.size()) {
            throw 'invalid index: ' + index;
        }
        if (index == 0) {
            this.prepend(value);
            return;
        } else if (index == this.size()) {
            this.append(value);
            return;
        } else {
            const current = this.#findPointAt(index);
            const prev = current.prev;
            const newPoint = new Point(value);
            prev.next = newPoint;
            newPoint.prev = prev;
            newPoint.next = current;
            current.prev = newPoint;
            this.#length++;
        }
    }

    toArray(){
        if(this.isEmpty()){
            return []
        }else{
            return this.#head.toArray()
        }
    }
}


let ll = new DoublyLinkedList();

ll.insertAt(0,"Apple")
ll.insertAt(1,"Mango")
ll.insertAt(2,"Banana")


console.log(ll.toArray())