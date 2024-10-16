import { weightedValue } from "../helper.js"
import { ScoreMethodA } from "./ScoreMethodA.js"
// This object is the basic code required for a slot machine that operates solely on random numbers and a sequence of realtive probabilities for each option


export class BaseMachine {
	
	constructor(probabilityArray, scoreMethod) {
		this.probabilityArray = probabilityArray
		this.scoreMethod = scoreMethod
	}

	generate() {
		let ans = []
		for (let i = 0; i < 3; i++) {
			let line = []
			for (let j = 0; j < 5; j++) {
				line.push(weightedValue(this.probabilityArray))
			}
			ans.push(line)
		}
		return ans
	}

	printOutput(ans) {
		console.log('Results')
		console.log(ans[0])
		console.log(ans[1])
		console.log(ans[2])
		console.log(this.scoreMethod.calculateTotalScore(ans))
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
			sum += this.scoreMethod.calculateTotalScore(ans)
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
			score = this.scoreMethod.calculateTotalScore(ans)
			if (score > winningAmount) {
				console.log(`Score of ${score} after ${i} iterations from:`)
				this.printOutput(ans)
				i += maxIterations + 10
			}
			i++
		}
		if (i === maxIterations) {
			console.log(`Winning amount of ${score} or more never occurred in ${maxIterations} iterations`)
		}
	}
}
