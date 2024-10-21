import { SequenceGenerator } from "./SequenceGenerator"

class SequenceGeneratorA extends SequenceGenerator {
	constructor(probabilityArray) {
		super()
		this.probabilityArray = probabilityArray
	}

	generate () {
		let ans = []
		for (let i = 0; i < 3; i++) {
			let line = []
			for (let j = 0; j < 5; j++) {
				line.push(this.weightedValue(this.probabilityArray))
			}
			ans.push(line)
		}
		return ans
	}
	//TODO I want to use various methods to alter the values contained in the probabilty array 
}
