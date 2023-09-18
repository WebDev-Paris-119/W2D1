/**
 * Welcome to JavaScript!
 */

/**
 * ? Primitive types:
 * numbers
 * string
 * boolean
 * null
 * undefined
 * out of the course :
 *  - BigInt
 *  - Symbol
 *
 * Non primitive type:
 * object
 * array
 * function
 *  */

/**
 * Constructors
 * new Array()
 * new Object()
 * new Number()
 * new Boolean()
 * new String()
 */

/**
 * Binary in a nutshell
 */

//  16 8 4 2 1
//  1  0 1 0 1

// What is a variable

let teacherName = "Florian"
console.log(teacherName)
let classSize

// Assigning a value to a variable

classSize = 4
// classSize = "Hello"
// const vs let
const aConstantVariable = "Une valeur constante, qui ne peut être modifiée"

// aConstantVariable = "What????"
// Assigning a new value to a variable / Reassigning
teacherName = "Anoureth"
/**
 * Rules for naming variables:
 * - Should describe in a simple way what data si stored in it.
 */

// snake_case
let a_pythonic_variable

// PascalCase
let JavaVariable

// camelCase (JS)
let xπÚ = "Toto"

let neverUseThat = new String("I am an object")

// let kebab-case (Not usable in JS but widely used in HTML / CSS)
// let a-variable
// typeof variables
console.log(teacherName)
console.log(typeof teacherName)
console.log(typeof neverUseThat)
console.log(typeof classSize)
console.log(typeof [])
console.log(typeof {})
console.log(typeof function () {})

// JS file is read from top to bottom

// console.log(unscopedVariable)
// let unscopedVariable = "This is wrong"
