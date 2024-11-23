// practice to create some variables that can't be changed from outside
function MySet() {
    let tempArray = [];
    function getArray() {
        return [...tempArray] // we are creating a clone of array.
    }
    function pushItem(value) {
        if (tempArray.includes(value) == false) {
            tempArray.push(value)
        }
    }

    function getSize() {
        return tempArray.length
    }

    function isEmpty() {
        return tempArray.length == 0
    }
    return { getArray, pushItem, getSize, isEmpty };
}


const { getArray, pushItem, getSize, isEmpty } = MySet();
console.log(isEmpty())
pushItem("A")
pushItem("A")
pushItem("A")
pushItem("A")
pushItem("A")
pushItem("A")
pushItem("B")
pushItem("B")
pushItem("B")
pushItem("B")
console.log(getArray())
console.log(getSize())
console.log(isEmpty())































