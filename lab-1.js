
// let values = ["A", "B", 56, 78];

// // array is a collection
// // its has length property which give us current size of array.
// // it has index based access to the elements
// // index of first item is 0
// // it can be iterate using for of loop
// // using filter() we can filter the elememnts from an array 
// // using push() we can add a new elememnt at the end of an array

function myPushMethod(array,value){
    // logic to add the 'value' in array 
    // only if it does not exist in the array already
    if(array.includes(value) == false){
        array.push(value)
    }
}

let myData = [];
myPushMethod(myData,"A")
myPushMethod(myData,"A")
myPushMethod(myData,"A")
myPushMethod(myData,"A")
myPushMethod(myData,"B")
myPushMethod(myData,"B")
myPushMethod(myData,"B")

console.log(myData)



//myData --> ["A","B"]

