//  class Person  - firstname,lastname  -- it should have a constructor 

//  getFirstname()
//  getLastName()
//  getFullName()
//  getInitials()

class Person {
    #firstName;
    #lastName;
    constructor(firstName, lastName) {
        if (typeof (firstName) != "string") {
            throw "firstName should be string"
        }
        if (typeof (lastName) != "string") {
            throw "lastName should be string"
        }
        if (firstName.length == 0) {
            throw "firstName should not be empty"
        }
        if (lastName.length == 0) {
            throw "firstName should not be empty"
        };

        this.#firstName = firstName.charAt(0).toUpperCase() + firstName.substring(1).toLowerCase()
        this.#lastName = lastName.charAt(0).toUpperCase() + lastName.substring(1).toLowerCase()
    }
    getFirstname() {
        return this.#firstName
    }
    getLastName() {
        return this.#lastName
    }
    getFullName() {
        return this.#firstName + " " + this.#lastName
    }
    getInitials() {
        return this.#firstName.charAt(0) + this.#lastName.charAt(0)
    }
}


let p = new Person("SAGAR", "gavand")

console.log(p.getFirstname())
console.log(p.getLastName())
console.log(p.getFullName())
console.log(p.getInitials())