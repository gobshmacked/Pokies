import { SequenceGenerator } from "./SequenceGenerator.js"
import { ProbabilityMultiplier } from "./ProbabilityMultiplier.js"

export class SequenceGeneratorA extends SequenceGenerator {
	constructor(symbolProbabilityArray, rowOneMultiplierAdd, longTermWeightingAdd, longTermWeightingRange) {
		super()
		this.symbolProbabilityArray = symbolProbabilityArray
		this.rowOneMultiplierAdd = rowOneMultiplierAdd
		this.generalMultiplier = Array(this.symbolProbabilityArray.length).fill(1)
		this.longTermWeight = new ProbabilityMultiplier(longTermWeightingAdd, longTermWeightingRange)
	}

	generate() {
		this.rowOneMultiplier = Array(this.symbolProbabilityArray.length).fill(1)
		let ans = []
		// for each line
		for (let i = 0; i < 3; i++) {
			let line = []
			// for each symbol along a line
			for (let j = 0; j < 5; j++) {
				// rocket ship feature to get line chains
				if (j === 0) {
					this.generalMultiplier[11] = 4
				} else if (line[j - 1] === 11 && line[0] === 11) {
					this.generalMultiplier[11] = 48
				} else {
					this.generalMultiplier[11] = 1
				}
				if (i === 0) {
					line.push(this.weightedValue(this.arrayMultiply(this.symbolProbabilityArray, this.generalMultiplier)))
					this.rowOneMultiplier[line[j]] += (this.rowOneMultiplierAdd[line[j]] - 1)
				} else {
					line.push(this.weightedValue(this.arrayMultiply(this.arrayMultiply(this.symbolProbabilityArray, this.rowOneMultiplier), this.generalMultiplier)))
				}
			}
			// console.log(this.generalMultiplier)
			ans.push(line)
		}
		this.longTermWeight.alterGeneralMultiplier(this.generalMultiplier, ans)
		return ans
	}
	// works on arrays of ints and floats of equal size
	arrayMultiply(array1, array2) {
		// console.log("TWO", array2)
		// console.log(array2.includes(21))
		let ans = []
		for (let k = 0; k < array1.length; k++) {
			ans.push(1.0 * array1[k] * 1.0 * array2[k])
		}
		// console.log("THREE", ans)
		return ans
	}
	//TODO I want to use various methods to alter the values contained in the probabilty array 
}
