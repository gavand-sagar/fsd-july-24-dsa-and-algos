const { Stack } = require('./lab-6-stack.js')


function reverse(array) {
    let stack = new Stack();
    for (const element of array) {
        stack.push(element)
    }
    let tempArray = []
    while (stack.size() > 0) {
        tempArray.push(stack.pop())
    }
    return tempArray;
}



let array = [5, 6, 7, 8, 9];

let result = reverse(array);
console.log(result)