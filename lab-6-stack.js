// Stack


class Stack {
    #array
    constructor() {
        this.#array = []
    }
    peek() {
        if (this.isEmpty()) {
            throw "Stack is Empty."
        }
        let lastIndex = this.#array.length - 1;
        return this.#array[lastIndex];
    }
    push(value) {
        this.#array.push(value)
    }
    pop() {
        if (this.isEmpty()) {
            throw "Stack is Empty."
        }
        return this.#array.pop()
    }
    isEmpty() {
        return this.#array.length == 0
    }
    size() {
        return this.#array.length
    }
}


//  its a collection but we can only access the last element of this collection
//  [2,3,4,5,8,9]
//  getLastItem()
//  initialy stack will be empty
//  if we want to insert, that should happed only at the last position
//  addToStack(9)
//  if we want to delete it should delete only from the last position, also it will return that item
//  deleteFromStack()
//  it should able to tell whether the stack is empty
//  isEmpty() 


// let s = new Stack();
// console.log(s.isEmpty()) /// true

// s.push(50)
// console.log(s.isEmpty())  // false
// console.log(s.peek()) // 50

// s.push(40)
// s.push(80)
// s.push(90)
// console.log(s.peek()) // 90

// console.log(s.pop()) // 90

// console.log(s.peek()) //80

module.exports = { Stack } 





