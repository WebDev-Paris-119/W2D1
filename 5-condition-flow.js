// Simple if condition

const itIsWednesday = true
const itIsRaining = false

const randomInteger = Math.floor(Math.random() * 10)

/**
 * if (condition) {
 * The logic that we want to apply
 * }
 */
if (itIsWednesday) {
	console.log("C'est mercredi")
} else {
	console.log("C'est un autre jour")
}

// if-else block

if (itIsWednesday) {
	console.log("C'est mercredi (bis)")
}
if (!itIsRaining) {
	console.log("🌞🌞🌞🌞🌞")
}
if (randomInteger > 5) {
	console.log("Big number")
} else {
	console.log("Small number")
}
/**
 * Reversing conditions with a bang !
 */

// if, else if ..., else block
console.log("if else-if else")
if (!itIsWednesday) {
	// Branche 1
	console.log("Un autre jour")
} else if (!itIsRaining) {
	// Branche 2
	console.log("!🌞!🌞!🌞!🌞!🌞")
} else if (randomInteger > 3) {
	// Branche 3
	console.log(`Valeur de randomInteger: ${randomInteger} > 3`)
} else {
	// Branche 4
	console.log("Toutes les condition précédentes sont fausses")
}

if (itIsWednesday && !itIsRaining && Math.random() > 0.5) {
}

const bigNumber = 1_123_543_678
// multiple if statements

// switch

const countdownStart = 2
console.log(`
---SWITCH---
`)
switch (countdownStart) {
	case 5:
		console.log("...5!")
		break
	case 4:
		console.log("...4!")
		break
	case 3:
		console.log("...3!")
		break
	case 2:
		console.log("...2!")
		break
	case 1:
		console.log("...1!")
		break
	case 0:
		console.log("Liftoff!!!")
		break
	default:
		console.log("Wrong input")
}

// Ternary operator

let result

if (Math.random() > 0.9) {
	result = "Chanceuuuux"
} else {
	result = "Pas de chance :("
}
console.log(result)
// condition ? true : false
const ternaryResult = Math.random() > 0.9 ? "Chanceuuuux" : "Pas de chance.."

// typeof 'string'
// 5 < 3
