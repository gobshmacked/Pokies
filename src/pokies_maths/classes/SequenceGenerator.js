// Class used to configure how each symbol is randomely generated and the way that changes with successive spins
// 

export class SequenceGenerator {

	constructor(probabilityArray) {
		this.probabilityArray = probabilityArray
	}

	// Generates using weighted value for each value with no additional variation
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

	weightedValue (probabilitySeries) {
		console.log(probabilitySeries)
		if (probabilitySeries.length === 0) return -1
	
		let sum = 0.0
		for (let i = 0; i < probabilitySeries.length; i++) {
			sum += probabilitySeries[i]
		}
		let tempsum = 0.0
		let rand = Math.random()
	
		// determine which integer best aligns with rand when considering probabilitySeries
		// done by each weighting[i] / length which gives the probability of it occuring as a decimal -> decimal used in cumulative probability total 
		for (let i = 0; i < probabilitySeries.length; i++) {
			if (rand < tempsum + (1.0 * probabilitySeries[i] / sum)) {
				return i
			}
			tempsum += 1.0 * probabilitySeries[i] / sum
		}
	}
}