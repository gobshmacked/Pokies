import { ScoreMethodA } from "./ScoreMethodA.js";
import { BaseMachine } from "./BaseMachine.js";
import { SequenceGeneratorA } from "./SequenceGeneratorA.js";
import { weightedValue } from '../helper.js'

// // value of each symbol
// let scoreArray = [180, 33, 35, 37, 39, 41, 130, 170, 270, 580, 1000, 100, 750];
// // probability of each symbol
// let probabilityArray = [40, 65, 66, 67, 68, 69, 80, 76, 50, 24, 14, 17, 18];
// // probability of appearence in subsequent rows if present in row 1
// let rowOneMultiplier = [1.2, 1.05, 1.05, 1.05, 1.05, 1.05, 1.2, 1.2, 1.2, 1.2, 1.2, 1, 1]
// // variables for long term probability effects
// let longTermWeightingAdd = [0.08, 0.03, -0.03, 0.03, 0.03, 0.03, 0.02, 0.08, 0.15, 0.02, 0.02, 0, 0.05]
// let longTermWeightingRange = [0.4, 0.2, 0.2, 0.2, 0.2, 0.2, 0.1, 0.23, 0.5, 0.1, 0.25, 0, 0.2]

// // backend generator creation start

// // sequence generator A, row 1 alters successive rows
// const sequenceGenerator = new SequenceGeneratorA(probabilityArray, rowOneMultiplier, longTermWeightingAdd, longTermWeightingRange);
// const scoreMethod = new ScoreMethodA(scoreArray);
// const machine = new BaseMachine(scoreMethod, sequenceGenerator);

let scoreArrayA = [145, 33, 35, 37, 39, 41, 100, 150, 250, 450, 800, 100, 550];
let probabilityArrayA = [45, 60, 61, 62, 63, 64, 80, 76, 50, 24, 14, 17, 18];
let rowOneMultiplierA = [1.2, 1.05, 1.05, 1.05, 1.05, 1.05, 1.2, 1.2, 1.2, 1.2, 1.2, 1, 1]
let longTermWeightingAddA = [0.08, 0.03, -0.03, 0.03, 0.03, 0.03, 0.02, 0.08, 0.15, 0.02, 0.02, 0, 0.05]
let longTermWeightingRangeA = [0.4, 0.2, 0.2, 0.2, 0.2, 0.2, 0.1, 0.23, 0.5, 0.1, 0.25, 0, 0.2]

const sequenceGeneratorA = new SequenceGeneratorA(probabilityArrayA, rowOneMultiplierA, longTermWeightingAddA, longTermWeightingRangeA);
const scoreMethodA = new ScoreMethodA(scoreArrayA);
const machineA = new BaseMachine(scoreMethodA, sequenceGeneratorA);

let scoreArrayB = [180, 33, 35, 37, 39, 41, 130, 170, 270, 580, 1000, 100, 750];
let probabilityArrayB = [40, 65, 66, 67, 68, 69, 80, 76, 50, 24, 14, 17, 18];
let rowOneMultiplierB = [1.2, 1.05, 1.05, 1.05, 1.05, 1.05, 1.2, 1.2, 1.2, 1.2, 1.2, 1, 1]
let longTermWeightingAddB = [0.08, 0.03, -0.03, 0.03, 0.03, 0.03, 0.02, 0.08, 0.15, 0.02, 0.02, 0, 0.05]
let longTermWeightingRangeB = [0.4, 0.2, 0.2, 0.2, 0.2, 0.2, 0.1, 0.23, 0.5, 0.1, 0.25, 0, 0.2]

const sequenceGeneratorB = new SequenceGeneratorA(probabilityArrayB, rowOneMultiplierB, longTermWeightingAddB, longTermWeightingRangeB);
const scoreMethodB = new ScoreMethodA(scoreArrayB);
const machineB = new BaseMachine(scoreMethodB, sequenceGeneratorB);

let scoreArrayC = [200, 33, 35, 37, 39, 41, 170, 230, 360, 700, 1100, 100, 900];
let probabilityArrayC = [35, 70, 71, 72, 73, 74, 70, 66, 47, 24, 14, 17, 18];
let rowOneMultiplierC = [1.2, 1.05, 1.05, 1.05, 1.05, 1.05, 1.2, 1.2, 1.2, 1.2, 1.2, 1, 1]
let longTermWeightingAddC = [0.08, 0.03, -0.03, 0.02, -0.04, 0.03, 0.02, 0.08, 0.15, 0.02, 0.02, 0, 0.05]
let longTermWeightingRangeC = [0.4, 0.3, 0.3, 0.3, 0.3, 0.3, 0.15, 0.3, 0.4, 0.3, 0.3, 0, 0.3]

const sequenceGeneratorC = new SequenceGeneratorA(probabilityArrayC, rowOneMultiplierC, longTermWeightingAddC, longTermWeightingRangeC);
const scoreMethodC = new ScoreMethodA(scoreArrayC);
const machineC = new BaseMachine(scoreMethodC, sequenceGeneratorC);


// machineA.simulateWinnings(10000000)
// machineB.simulateWinnings(10000000)
machineC.simulateWinnings(10000000)
// machineC.winningsAtLeast(6000, 1000000)