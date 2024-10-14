import { weightedValue } from "../basic.js"
// This object is the basic code required for a slot machine that operates solely on random numbers and a sequence of realtive probabilities for each option


export class BaseMachine {
	
	constructor(probabilityArray, scoreClass) {
		this.probabilityArray = probabilityArray
		this.scoreClass = scoreClass
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

	scoring(ans) {
		
	}

	generatePrint() {
		let ans = this.generate()
		console.log('Results')
		console.log(ans[0])
		console.log(ans[1])
		console.log(ans[2])
	}
}

// scoring details
// 0 is wild card  
// 1,2,3,4,5 are A, 10, J, Q, K raw value of 3 below and each extra symble triples the odds
// 6, 7, 8 are low val symbols winning squares the values
// 9, 10 are high val symbols winning squares then doubles
// 11 is black hole devour world minigame TODO
// 12 is eventually gonna be planet change, art and algorithm swithc up TODO


let probabilityArray = [66, 70, 71, 72, 73, 74, 82, 76, 70, 20, 14]

const machine = new BaseMachine(probabilityArray)
machine.generatePrint()

let scoreArray = [225, 25, 27, 29, 31, 33, 100, 150, 250, 600, 1000]