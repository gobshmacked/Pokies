import { weightedValue } from "../basic.js"
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

	generatePrint() {
		let ans = this.generate()
		console.log('Results')
		console.log(ans[0])
		console.log(ans[1])
		console.log(ans[2])
		console.log(scoreMethod.calculateTotalScore(ans))
	}

	// simulates winnings based on bets of 1
	simulateWinnings(iterations) {
		let sum = 0
		for (let i = 0; i < iterations; i++) {
			let ans = this.generate()
			sum += scoreMethod.calculateTotalScore(ans)
		}
		sum = sum / 100
		console.log(`From ${iterations} iterations:`)
		console.log(`Spent:\t${iterations}`)
		console.log(`Gained:\t${sum}`)
	}
}

let scoreArray = [180, 25, 27, 29, 31, 33, 100, 150, 250, 600, 1000]
let probabilityArray = [40, 70, 71, 72, 73, 74, 82, 76, 65, 20, 14]

const scoreMethod = new ScoreMethodA(scoreArray)
const machine = new BaseMachine(probabilityArray, scoreMethod)

// machine.generatePrint()
machine.simulateWinnings(1000000)
