/**
 * We want to be able to "write text"
 * (And a bit of coercion, casting/conversion, search)
 */

/**
 * single quotes: ''
 * double quotes: ""
 * backticks: ``
 */

//  Concatenation

const hello = "Hello"
const devClass = "WebDev-119"
const greeting = hello + " " + devClass + "!"
console.log(greeting)

// Advantages of backticks
const betterGreetings = `${hello} ${devClass}!!!!`
// let htmlCard = '<div class="card">
// <h2>Title</h2>
// </div>
// '
let htmlCard = `
<div class="card">
  <h2>Title</h2>
  <p>Lorem 😀</p>
</div>`

//  Template literal

// Multi-line

// index in Strings
let myName = "floroan"
console.log(myName[0].toUpperCase() + myName.slice(1))
console.log(myName.toUpperCase())

console.log(myName.includes("ori"))
// const randomThing = myName.replaceAll("o", "Well hello there, what's up?")
let randomThing = myName.replaceAll("o", "*")
console.log(randomThing)
console.log(randomThing.length)
/**
 * Some available methods
 * length, upper / lower case, includes, replace, replaceAll ...
 */

// Immutability
// randomThing = randomThing[0].toUpperCase() + randomThing.slice(1)
randomThing[0].toUpperCase() // "F"

console.log(randomThing)
console.log(myName)

// Comparing strings

console.log("Anoureth" < "alorian") // true
console.log("Anoureth" < "Alorian") // false

console.log("Anoureth".toLowerCase() < "alorian".toLowerCase())

// localeCompare
console.log(
	"RÉSERVÉ".localeCompare("reserve", undefined, { sensitivity: "base" })
)

myName.startsWith("fl")
