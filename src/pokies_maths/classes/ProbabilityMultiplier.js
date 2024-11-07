// This class acts as a weighting table that 


export class ProbabilityMultiplier {

	constructor(multiplierAdderArray, multiplierRangeArray) {
		this.multiplierAdderArray = multiplierAdderArray
		this.multiplierRangeArray = multiplierRangeArray
	}


	// each time a symbol appears add that cell in multiplierAddeArray to multiplierArray which is multiplied with the symbol probability weightings
	alterGeneralMultiplier(multiplierArray, symbolArray) {
		let symbolCount = Array(multiplierArray.length).fill(0)
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 5; j++) {
				let symbolNumber = symbolArray[i][j]
				symbolCount[symbolNumber]++
			}
		}
		this.combineProbabilityArrays(multiplierArray, symbolCount)
	}
	// adds or removes to the multiplier array based on how many times symbol appears
	combineProbabilityArrays(multiplierArray, symbolCount) {
		for (let i = 0; i < symbolCount.length; i++) {
			if (symbolCount[i] === 0) {
				multiplierArray[i] += this.multiplierAdderArray[i]
			} else {
				multiplierArray[i] -= this.multiplierAdderArray[i] * symbolCount[i]
			}
			// if probability exceeds range make it 75% of way under the range
			// if probability is below range make it 75% over range
			if (multiplierArray[i] > (1 + this.multiplierRangeArray[i])) {
				multiplierArray[i] = 1 - (0.75 * this.multiplierRangeArray[i])
			} else if (multiplierArray[i] < (1 - this.multiplierRangeArray[i])) {
				multiplierArray[i] = 1 + (0.75 * this.multiplierRangeArray[i])
			}
		}
	}
}