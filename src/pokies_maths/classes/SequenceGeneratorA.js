import { SequenceGenerator } from "./SequenceGenerator.js"

export class SequenceGeneratorA extends SequenceGenerator {
	constructor(symbolProbabilityArray, rowOneMultiplierAdd) {
		super()
		this.symbolProbabilityArray = symbolProbabilityArray
		this.rowOneMultiplierAdd = rowOneMultiplierAdd
	}

	generate() {
		this.rowOneMultiplier = Array(this.symbolProbabilityArray.length).fill(1)
		this.generalMultiplier = Array(this.symbolProbabilityArray.length).fill(1)
		let ans = []
		for (let i = 0; i < 3; i++) {
			let line = []
			for (let j = 0; j < 5; j++) {
				if (line.length === 0) {
					this.generalMultiplier[11] *= 1.5
				} else if (line[j - 1] === 11 && line[0] === 11) {
					this.generalMultiplier[11] *= 4
				}
				if (i === 0) {
					line.push(this.weightedValue(this.symbolProbabilityArray))
					this.rowOneMultiplier[line[j]] += (this.rowOneMultiplierAdd[line[j]] - 1)
				} else {
					line.push(this.weightedValue(this.arrayMultiply(this.arrayMultiply(this.symbolProbabilityArray, this.rowOneMultiplier), this.generalMultiplier)))
				}
			}
			ans.push(line)
		}
		return ans
	}
	// works on arrays of ints and floats of equal size
	arrayMultiply(array1, array2) {
		let ans = []
		for (let i = 0; i < array1.length; i++) {
			ans.push(1.0 * array1[i] * 1.0 * array2[i])
		}
		return ans
	}
	//TODO I want to use various methods to alter the values contained in the probabilty array 
}
