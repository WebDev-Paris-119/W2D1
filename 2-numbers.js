/**
 * Let's talk about Math
 */

/**
 * Operators:
 * addition: +
 * substraction: -
 * multiply: *
 * division: /
 * powerof: **
 * modulo: %
 */
let myNumber = 5
console.log(5 % 2 === 0)
// 2 + 2 reste 1

// let amountOfSeconds = 76543348
let amountOfSeconds = 125
console.log(amountOfSeconds % 60)

// Order of operations

let resultOfMath = (3 * 5 + 2 * 3) * 2
//  (15 + 2 * 3) * 2
//  (15 + 6) * 2
//   21 * 2
//   42

/**
 * Shorthand math
 */

let total = 0
total = total + 2
total += 2
total *= 4
total /= 5
total **= 4
console.log(total)

let incrementOrDecrement = 0
// pre increment
console.log(++incrementOrDecrement)
// post increment
console.log(incrementOrDecrement++)

// Math constructor

const π = Math.PI
/**
 * Math.ceil  2.25 => 3
 * Math.floor  2.75 => 2
 * Math.round  2.45 => 2
 * Math.random
 */
console.log(Math.round(2.5))
const biggestNumber = Infinity
// Getting a random number

let randomFloat = Math.random()
console.log("Math.random(): ", randomFloat)
const multipliedBy10 = randomFloat * 10
console.log(multipliedBy10)
const randomInteger = Math.floor(multipliedBy10)
console.log(randomInteger)

const randomNumberInOneGo = Math.floor(Math.random() * 10)
// Operations between numbers and Strings
console.log("Operations beween numbers and Strings")
let whatIsThat = "1" + 1
// "Hello" + " World"
console.log(whatIsThat)
const whatIsThatAgain = 1 + "1"
console.log(whatIsThatAgain)

console.log(+"5")
console.log("5" * 1)
console.log(Number("5"))

// NaN

console.log(typeof NaN)
console.log("Yo" * 7)
const probablyNotANumber = "Yo" * 2
console.log(isNaN(probablyNotANumber))
// console.log([] * 7)

// Incrementing / Decrementing numbers
