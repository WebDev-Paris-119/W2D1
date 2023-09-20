// The good old for-loop

// Anatomy of a for-loop
// for (variable initialisation ; condition ; increment / decrement) {}

let loop = "loopy-loop "
// loop += "hello"
for (let i = 0; i < 10; i++) {
	console.log(`i vaut maintenant: ${i}`)
	loop += "loopy-loop "
	// console.log(loop)
}

// console.log(loop)

/**
 * Infinite loop:
 * To cancel a process : Ctrl + C
 */
// ! Infinte loop here
// for (let i = 0; i < 5; i--) {
// 	console.log(i)
// }

// while loop

let myString = ""
let count = 0
while (myString.length < 100) {
	myString += "aaaaaa"
	count++
}

console.log(count)

const startTime = Date.now()
// console.log(startTime)

let counter = 0
let delta

console.time("whileLoop")
do {
	counter++
	delta = Date.now() - startTime
	console.log("Delta: ", delta)
} while (delta < 2000)

console.log(counter)
console.timeEnd("whileLoop")
// break and continue

for (let i = 0; i < 100; i++) {
	if (i % 2 === 0) {
		continue
	}
	if (i > 15) {
		break
	}
	console.log(i)
}

// Starification

let myName = "florian"
// *f*l*o*r*i*a*n*
let newName = ""

for (let i = 0; i < myName.length; i++) {
	newName += "*" + myName[i]
	if (i === myName.length - 1) {
		newName += "*"
	}
}
console.log(newName)
