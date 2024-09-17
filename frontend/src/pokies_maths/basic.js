// ME messing around trying to find good way to make number sequence

// Takes an array of integers where probabilitySeries[i] is how much more often i should appear than other values. E.g w[i] = 1 and w[j] = 10. w[j] should appear 10 times more often
// values should all be integers 1 or greater
// Returns a single random weighted value

const weightedValue = (probabilitySeries) => {
	if (probabilitySeries.length === 0) return -1

	let sum = 0 
	for (let i = 0; i < probabilitySeries.length; i++) {
		sum += probabilitySeries[i]
	}
	let tempsum = 0
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

// This object is the basic code required for a slot machine that operates solely on random numbers and a sequence of realtive probabilities for each option
class BaseMachine {
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

	generatePrint() {
		let ans = this.generate()
		console.log('Results')
		console.log(ans.slice(0, 5))
		console.log(ans.slice(5, 10))
		console.log(ans.slice(10, 15))
	}
}

const testWeightedValue = (calls, probabilitySeries) => {
	let ans = []
	for (let i = 0; i < probabilitySeries.length; i++) {
		ans.push(0)
	}
	for (let i = 0; i < calls; i++) {
		ans[weightedValue(probabilitySeries)] += 1
	}
	for (let i = 0; i < probabilitySeries.length; i++) {
		console.log(`${i} appears ${ans[i]}`)
	}
}

testArray = [100,100,100,100,100,100,100,50,50,50,50,50,20,10,1]


// OUTPUTTING TO CONSOLE BELOW HERE
// testWeightedValue(1000000, testArray)
// console.log(weightedValue(testArray))
const machine = new BaseMachine(testArray)
machine.generatePrint()