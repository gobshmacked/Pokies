import { ScoreMethodA } from "./ScoreMethodA.js";
import { BaseMachine } from "./BaseMachine.js";
import { SequenceGeneratorA } from "./SequenceGeneratorA.js";
import { weightedValue } from '../helper.js'

// let scoreArray = [180, 25, 27, 29, 31, 33, 100, 150, 250, 600, 1000]
// let probabilityArray = [40, 70, 71, 72, 73, 74, 82, 76, 65, 20, 14]

// const scoreMethod = new ScoreMethodA(scoreArray)
// const machine = new BaseMachine(probabilityArray, scoreMethod)

// // machine.printOutput(machine.generate())
// // machine.simulateWinnings(1000000)
// machine.winningsAtLeast(200, 10000000)


// value of each symbol
let scoreArray = [180, 25, 27, 29, 31, 33, 100, 150, 250, 600, 1000, 100, 750];
// probability of each symbol
let probabilityArray = [40, 70, 71, 72, 73, 74, 82, 76, 48, 20, 14, 17, 17];
// probability of appearence in subsequent rows if present in row 1
let rowOneMultiplier = [1.2, 1.05, 1.05, 1.05, 1.05, 1.05, 1.2, 1.2, 1.2, 1.2, 1.2, 1, 0]
// variables for long term probability effects
let longTermWeightingAdd = [0.08, 0.03, -0.03, 0.03, 0.03, 0.03, 0.02, 0.08, 0.15, 0.02, 0.02, 0, 0.05]
let longTermWeightingRange = [0.4, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.23, 0.5, 0.1, 0.1, 0, 0.2]

// backend generator creation start

// sequence generator A, row 1 alters successive rows
const sequenceGenerator = new SequenceGeneratorA(probabilityArray, rowOneMultiplier, longTermWeightingAdd, longTermWeightingRange);
const scoreMethod = new ScoreMethodA(scoreArray);
const machine = new BaseMachine(scoreMethod, sequenceGenerator);

// machine.simulateWinnings(1000000)
machine.winningsAtLeast(2000, 10000000)