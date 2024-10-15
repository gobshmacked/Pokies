import { ScoreMethod } from "./ScoreMethod.js";


export class ScoreMethodA extends ScoreMethod {

	constructor(scoreArray) {
		super()
		this.scoreArray = scoreArray
	}

	// takes in the generated array of numbers and finds all the winning matches in the spin
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
					ans += this.calculateComboScore(pokiesArray, startRow, startCol, ansArray, target)
					ansArray = []
					target = -1
					i--
				}
			}
		}
		return Math.ceil(ans) / 100
	}

	// calculates value of particular combo
	calculateComboScore(pokiesArray, row, col, comboArray, target) {
		let ans = 0
		if (target === -1) {
			target = 0
		}
		let wildArray = []
		for (let i = 0; i < comboArray.length; i++) {
			if (comboArray[i] === 0) {
				let wilds = this.wildsInCol(pokiesArray, row, col + i)
				wildArray.push((Math.pow(2, wilds - 1)) * this.scoreArray[0])
			}
		}
		// console.log(target)
		// console.log(this.scoreArray[target])
		switch (target) {
			case 0:
				return this.arraySum(wildArray)
				break;
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				ans = this.scoreArray[target] * Math.pow(3, comboArray.length - 3)
				break;
			case 6:
			case 7:
			case 8:
				ans = this.powThenHalf(this.scoreArray[target], 1.3, comboArray.length - 3)
				break;
			case 9:
			case 10:
				ans = this.powThenHalf(this.scoreArray[target], 1.5, comboArray.length - 3)
				break;
		}
		if (wildArray.length === 0) {
			return ans
		} else {
			ans = ans * ((comboArray.length - wildArray.length) / comboArray.length) + this.arraySum(wildArray)
			return ans
		}
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

	arraySum(array) {
		let sum = 0
		for (let i = 0; i < array.length; i++) {
			sum += array[i]
		}
		return sum
	}

	powThenHalf(base, exponent, times) {
		for (let i = 0; i < times; i++) {
			base =  Math.pow(base, exponent) / 2
		}
		return base
	}

}

// scoring details
// 0 is wild card each wild card acts as 180 takes the place of part of the value of the symbol, for better or worse. Multiple used in the same pattern results in a multiplier effec where 60 is added to value of each for each present in pattern
// 1,2,3,4,5 are A, 10, J, Q, K raw value of 3 below and each extra symble triples the odds
// 6, 7, 8 are low val symbols winning squares the values by 1.3 then halves
// 9, 10 are high val symbols winning puts to power of 1.5 then halves
// 11 is black hole devour world minigame TODO
// 12 is eventually gonna be planet change, art and algorithm swithc up TODO

let scoreArray = [180, 25, 27, 29, 31, 33, 100, 150, 250, 600, 1000]