import { ScoreMethod } from "./ScoreMethod";


export class ScoreMethodA extends ScoreMethod {

	constructor(scoreArray) {
		this.scoreArray = scoreArray
	}

	calculateScore(pokiesArray) {
		
	}
}

// scoring details
// 0 is wild card  
// 1,2,3,4,5 are A, 10, J, Q, K raw value of 3 below and each extra symble triples the odds
// 6, 7, 8 are low val symbols winning squares the values
// 9, 10 are high val symbols winning squares then doubles
// 11 is black hole devour world minigame TODO
// 12 is eventually gonna be planet change, art and algorithm swithc up TODO

let scoreArray = [180, 25, 27, 29, 31, 33, 100, 150, 250, 600, 1000]