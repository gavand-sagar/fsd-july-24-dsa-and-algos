class SortedArray {
    #array = []
    push(item) {
        let insertionPoint = this.#getInsertionPoint(item)
        this.#insertAt(insertionPoint, item);
    }

    #getInsertionPoint(item) {
        let insertionPoint = this.size();
        for (let i = this.size() - 1; i >= 0; i--) {
            if (this.#array[i] <= item) {
                break;
            }
            insertionPoint = i;
        }
        return insertionPoint
    }

    #insertAt(index, item) {
        let left = this.#array.slice(0, index)
        let right = this.#array.slice(index);
        this.#array = left.concat([item]).concat(right);
    }

    basicPush(item) {
        this.#array.push(item)
        this.#array.sort((a, b) => a - b)
    }

    toArray() {
        return [...this.#array]
    }
    size() {
        return this.#array.length
    }
    isEmpty() {
        return this.size() == 0
    }
    elementAt(index) {
        if (typeof (index) != 'number') {
            throw 'index must be number.'
        }
        if (index < 0 || index >= this.size()) {
            throw "Index cannot be negetive of greather than size"
        }
        return this.#array[index]
    }
}


let s = new SortedArray();
s.push(6)
s.push(7)
s.push(4)
s.push(3)
s.push(5)

console.log(s.toArray())


