import { ScoreMethod } from "./ScoreMethod";


export class ScoreMethodA extends ScoreMethod {

	constructor(scoreArray) {
		this.scoreArray = scoreArray
	}

	calculateTotalScore(pokiesArray) {
		let ans = 0
		for (let line = 0; line < 3; line++) {
			let target = -1
			let ansArray = []
			let startRow = 0
			let startCol = 0
			for (let i = 0; i < 5; i++) {
				if (target === -1 && pokiesArray[line][i] !== 0) {
					target = pokiesArray[line][i]
				}
				if (pokiesArray[line][i] === target || pokiesArray[line][i] === 0) {
					ansArray.push(pokiesArray[line][i])
					if (startRow === 0 && startCol === 0) {
						startRow = line
						startCol = i
					}
				} else {
					ansArray = []
					target = -1
					i--
				}
				// if there is already a combo of 3 and the combo does not continue in the next slide
				if (ansArray.length >= 3 && (i === 4 || (pokiesArray[line][i + 1] !== target && pokiesArray[line][i + 1] !== 0))) {
					this.calculateComboScore(pokiesArray, startRow, startCol, ansArray)
				}
			}
		}
		return ans
	}

	// calculates value of particular 
	calculateComboScore(pokiesArray, row, col, comboArray) {

	}

	// returns the number of wilds that are next to each other in column based on the provided row and col of a wild element
	wildsInCol(pokiesArray, row, col) {
		let count = 1
		if (row - 1 >= 0) {
			if (pokiesArray[row - 1][col] === 0) {
				count++
			}
		}
		if (row + 1 < 3) {
			if (pokiesArray[row + 1][col] === 0) {
				count++
			}
		}
		return count
	}

}

// scoring details
// 0 is wild card each wild card acts as 180 takes the place of part of the value of the symbol, for better or worse. Multiple used in the same pattern results in a multiplier effec where 60 is added to value of each for each present in pattern
// 1,2,3,4,5 are A, 10, J, Q, K raw value of 3 below and each extra symble triples the odds
// 6, 7, 8 are low val symbols winning squares the values
// 9, 10 are high val symbols winning squares then doubles
// 11 is black hole devour world minigame TODO
// 12 is eventually gonna be planet change, art and algorithm swithc up TODO

let scoreArray = [180, 25, 27, 29, 31, 33, 100, 150, 250, 600, 1000]