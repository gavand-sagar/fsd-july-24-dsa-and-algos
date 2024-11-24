// Stack


class Stack {
    #array
    constructor() {
        this.#array = []
    }
    getLastItem() {
        if (this.isEmpty()) {
            throw "Stack is Empty."
        }
        let lastIndex = this.#array.length - 1;
        return this.#array[lastIndex];
    }
    addToStack(value) {
        this.#array.push(value)
    }
    deleteFromStack() {
        if (this.isEmpty()) {
            throw "Stack is Empty."
        }
        return this.#array.pop()
    }
    isEmpty() {
        return this.#array.length == 0
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


let s = new Stack();
console.log(s.isEmpty()) /// true

s.addToStack(50)
console.log(s.isEmpty())  // false
console.log(s.getLastItem()) // 50

s.addToStack(40)
s.addToStack(80)
s.addToStack(90)
console.log(s.getLastItem()) // 90

console.log(s.deleteFromStack()) // 90

console.log(s.getLastItem()) //80






