// ME messing around trying to find good way to make number sequence

// Draft for iconography
// 5 letters, 5 symboles, 2 numbers
// letters are filler and create a line with at least 2 pictures assuming all letters are the same
// Win on lines and diagonals, never only vertial although a middle vertical line and diagonals are good
// 1 cool looking filler symbol that appears often and bridges the gap between other letters or symbols
// vertical based symbol that acts as a filler for rows of 3
// Hyper rare jackpot symbol
// More common symbol for advances features
// 3 in a row enough for a small win, including with vertical filler

// Takes an array of integers where weightings[i] is how much more often i should appear than other values. E.g w[i] = 1 and w[j] = 10. w[j] should appear 10 times more often
// values should all be integers 1 or greater
// Returns a single random weighted value

const weightedValue = (weightings) => {
	if (weightings.length === 0) return -1

	let sum = 0 
	for (let i = 0; i < weightings.length; i++) {
		sum += weightings[i]
	}
	let tempsum = 0
	let rand = Math.random()
	// determine which integer best aligns with rand when considering weightings
	for (let i = 0; i < weightings.length; i++) {
		if (rand < tempsum + (1.0 * weightings[i] / sum)) {
			return i
		}
		tempsum += 1.0 * weightings[i] / sum
	}
}

testArray = [100,100,100,100,100,50,50,50,20,10,1]

console.log(weightedValue(testArray))