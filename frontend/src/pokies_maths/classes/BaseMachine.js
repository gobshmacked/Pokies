import { weightedValue } from "../basic"
// This object is the basic code required for a slot machine that operates solely on random numbers and a sequence of realtive probabilities for each option


export class BaseMachine {
	
	constructor(probabilitySeries) {
		this.probabilitySeries = probabilitySeries
	}

	generate() {
		let ans = []
		for (let i = 0; i < 15; i++) {
			ans.push(weightedValue(this.probabilitySeries))
		}
		return ans
	}

	scoring(ans) {

	}

	generatePrint() {
		let ans = this.generate()
		console.log('Results')
		console.log(ans.slice(0, 5))
		console.log(ans.slice(5, 10))
		console.log(ans.slice(10, 15))
	}
}


let testArray = [100,100,100,100,100,100,100,50,50,50,50,50,20,10,1]

const machine = new BaseMachine(testArray)
machine.generatePrint()