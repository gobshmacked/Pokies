import { ScoreMethodA } from "./ScoreMethodA.js"
// This object is the basic code required for a slot machine that operates solely on random numbers and a sequence of realtive probabilities for each option


export class BaseMachine {
	
	constructor(scoreMethod, sequenceGenerator) {
		this.scoreMethod = scoreMethod
		this.sequenceGenerator = sequenceGenerator
	}

	generate() {
		return this.sequenceGenerator.generate()
	}

	winnings(ans, winningArray) {
		return this.scoreMethod.calculateTotalScore(ans, winningArray)
	}

	printOutput(ans) {
		let winnings = []
		console.log('Results')
		console.log(ans[0])
		console.log(ans[1])
		console.log(ans[2])
		console.log(this.scoreMethod.calculateTotalScore(ans, winnings))
	}

	// simulates winnings based on bets of 1
	simulateWinnings(iterations) {
		let sum = 0
		for (let i = 0; i < iterations; i++) {
			if (i % 1000000 === 0) {
				let upto = i / 1000000
				console.log(`Upto iteration ${upto} million`)
			}
			let ans = this.generate()
			let winnings = []
			sum += this.scoreMethod.calculateTotalScore(ans, winnings)
		}
		console.log(`From ${iterations} iterations:`)
		console.log(`Spent:\t${iterations}`)
		console.log(`Gained:\t${sum}`)
	}

	// prints the first output with 
	winningsAtLeast(winningAmount, maxIterations) {
		let i = 0
		let score = 0
		while (i < maxIterations) {
			let ans = this.generate()
			let winnings = []
			score = this.scoreMethod.calculateTotalScore(ans, winnings)
			if (score > winningAmount) {
				console.log(`Score of ${score} after ${i} iterations from:`)
				this.printOutput(ans)
				i += maxIterations + 10
			}
			i++
		}
		if (i === maxIterations) {
			console.log(`Winning amount of ${winningAmount} or more never occurred in ${maxIterations} iterations`)
		}
	}
}
