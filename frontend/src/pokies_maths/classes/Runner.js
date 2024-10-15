import { ScoreMethodA } from "./ScoreMethodA.js";
import { BaseMachine } from "./BaseMachine.js";
import { weightedValue } from '../helper.js'

let scoreArray = [180, 25, 27, 29, 31, 33, 100, 150, 250, 600, 1000]
let probabilityArray = [40, 70, 71, 72, 73, 74, 82, 76, 65, 20, 14]

const scoreMethod = new ScoreMethodA(scoreArray)
const machine = new BaseMachine(probabilityArray, scoreMethod)

// machine.printOutput(machine.generate())
// machine.simulateWinnings(1000000)
machine.winningsAtLeast(100, 1000000)