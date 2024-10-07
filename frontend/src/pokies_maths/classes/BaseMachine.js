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

// scoring details
// 0 is wild card  
// 1,2,3,4,5 are A, 10, J, Q, K raw value of 3 below and each extra symble triples the odds
// 6, 7, 8 are low val symbols winning squares the values
// 9, 10 are high val symbols
// 11 is black hole devour world minigame
// 12 is eventually gonna be planet change, art and algorithm swithc up TODO


let probabilitySeries = [66, 70, 71, 72, 73, 74, 82, 76, 70, 20, 14]

const machine = new BaseMachine(probabilitySeries)
machine.generatePrint()

let scoreArray = [225, 25, 27, 29, 31, 33, 100, 150, 250, 600, 1000]