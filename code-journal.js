/* Variables - containers that store values */

var name // a declared variable, but not initialized and it's in the global scope (BAD)

let foo // a declared variable that can be changed

const bar // a declared variable that cannot be changed = short for "constant"

const ANSWER = 42 // const is declared and initialized with the value 42

//Strings

let string1 = "Hello World" // Read the '=' as 'is assigned the value of...'

let string2 = 'Hello Utah'

let string3 = new String('Hello World!')

//Number

let myNum = 548143

let myNum2 = 45.69

'1' == 1 // This statement is trur because of type coercion and loose quality checking

'1' === 1 // False because this is strict equality checking

//Boolean

let myBool = true

// Array

let myArray = [] // this is an empty array
//              0     1     2       3      4   
let myArray2 = [42, 'Bob', myBool, ANSWER, true]

let secondElement = myArray2[1]

myArray2.push('Haven') // added an element to the end of myArray2

myArray2.unshift('Hello World!')

let mylongString = 'lsdlfkjsalkjfd;lajsdfoifewaoifnasoidgjilkjweri' // just an array of characters

mylongString.length

// Object

let minObject = {}

const myCar = {
    make: 'Chevrolet',
    color: 'Red',
    year: '1965',
    vin: '15551434351453'
}

// Arrow Functions

// a higher order function is a function that accepts another function as a parameter.
//filter, map and reduce are the most popular, but forEach, every, find, and some are also HOFs

const theFunction = () => { //multiple lines use curly braces and 'return' keyword
    'I am awesome'
}
