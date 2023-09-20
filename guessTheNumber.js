const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
})

const secretNumber = 5
console.log("Guess the number...")
readline.question("What's your guess? ", (guess) => {
	if (Number(guess) !== secretNumber) {
		console.log("WRONG GUESS")
	} else {
		console.log("CONGRATS !!!!!!!!")
	}
	process.exit()
})
