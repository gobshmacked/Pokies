import React, { useRef } from 'react'
import { styled } from '@mui/material'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { AnswerGrid } from './AnswerGrid'
import { BaseMachine } from '../pokies_maths/classes/BaseMachine.js'
import { ScoreMethodA } from '../pokies_maths/classes/ScoreMethodA.js'
import { SequenceGenerator } from '../pokies_maths/classes/SequenceGenerator.js'
import { SequenceGeneratorA } from '../pokies_maths/classes/SequenceGeneratorA.js'
import supernova from './assets/supernovalogo.png'
import './cssStyles/DefaultPage.css'

import image0a from './assets/pokie_images/0.png';
import image0b from './assets/pokie_images/0b.png';
import image0c from './assets/pokie_images/0c.png';

export function DefaultPage(props) {
  const [delayedPokieNumbers, setDelayedPokieNumbers] = React.useState([5, 8, 6, 9, 6, 0, 4, 6, 9, 3, 10, 10, 6, 1, 0]);
	const [spins, setSpins] = React.useState(0)
	const [winnings, setWinnings] = React.useState(0)
	const [totalWinnings, setTotalWinnings] = React.useState(0)
	const [winningsArray, setWinningsArray] = React.useState([])
	const [gameState, setGameState] = React.useState(['green'])
	const [gameStateChanger, setGameStateChanger] = React.useState(false)
	const [uploadFunds, setUploadFunds] = React.useState('');
	const [simulateSpins, setSimulateSpins] = React.useState('');
	const [nextWinValue, setNextWinValue] = React.useState('');
	const [showSimulationText, setShowSimulationText] = React.useState(false);
	const [simulationTexts, setSimulationTexts] = React.useState([0, 0, 0]);

	let scoreArrayA = [145, 33, 35, 37, 39, 41, 100, 150, 250, 450, 800, 100, 550];
	let probabilityArrayA = [45, 60, 61, 62, 63, 64, 80, 76, 50, 24, 14, 17, 18];
	let rowOneMultiplierA = [1.2, 1.05, 1.05, 1.05, 1.05, 1.05, 1.2, 1.2, 1.2, 1.2, 1.2, 1, 1]
	let longTermWeightingAddA = [0.08, 0.03, -0.03, 0.03, 0.03, 0.03, 0.02, 0.08, 0.15, 0.02, 0.02, 0, 0.05]
	let longTermWeightingRangeA = [0.4, 0.2, 0.2, 0.2, 0.2, 0.2, 0.1, 0.23, 0.5, 0.1, 0.25, 0, 0.2]

	const sequenceGeneratorRefA = useRef(null);
  if (sequenceGeneratorRefA.current === null) {
    sequenceGeneratorRefA.current = new SequenceGeneratorA(probabilityArrayA, rowOneMultiplierA, longTermWeightingAddA, longTermWeightingRangeA);
  }
  const sequenceGeneratorA = sequenceGeneratorRefA.current;
	const scoreMethodA = new ScoreMethodA(scoreArrayA);
	const machineA = new BaseMachine(scoreMethodA, sequenceGeneratorA);

	let scoreArrayB = [180, 33, 35, 37, 39, 41, 130, 170, 270, 580, 1000, 100, 750];
	let probabilityArrayB = [40, 65, 66, 67, 68, 69, 80, 76, 50, 24, 14, 17, 18];
	let rowOneMultiplierB = [1.2, 1.05, 1.05, 1.05, 1.05, 1.05, 1.2, 1.2, 1.2, 1.2, 1.2, 1, 1]
	let longTermWeightingAddB = [0.08, 0.03, -0.03, 0.03, 0.03, 0.03, 0.02, 0.08, 0.15, 0.02, 0.02, 0, 0.05]
	let longTermWeightingRangeB = [0.4, 0.2, 0.2, 0.2, 0.2, 0.2, 0.1, 0.23, 0.5, 0.1, 0.25, 0, 0.2]

	const sequenceGeneratorRefB = useRef(null);
  if (sequenceGeneratorRefB.current === null) {
    sequenceGeneratorRefB.current = new SequenceGeneratorA(probabilityArrayB, rowOneMultiplierB, longTermWeightingAddB, longTermWeightingRangeB);
  }
  const sequenceGeneratorB = sequenceGeneratorRefB.current;
	const scoreMethodB = new ScoreMethodA(scoreArrayB);
	const machineB = new BaseMachine(scoreMethodB, sequenceGeneratorB);

	let scoreArrayC = [200, 33, 35, 37, 39, 41, 170, 230, 360, 700, 1100, 100, 900];
	let probabilityArrayC = [35, 70, 71, 72, 73, 74, 70, 66, 47, 24, 14, 17, 18];
	let rowOneMultiplierC = [1.2, 1.05, 1.05, 1.05, 1.05, 1.05, 1.2, 1.2, 1.2, 1.2, 1.2, 1, 1]
	let longTermWeightingAddC = [0.08, 0.03, -0.03, 0.02, -0.04, 0.03, 0.02, 0.08, 0.15, 0.02, 0.02, 0, 0.05]
	let longTermWeightingRangeC = [0.4, 0.3, 0.3, 0.3, 0.3, 0.3, 0.15, 0.3, 0.4, 0.3, 0.3, 0, 0.3]

	const sequenceGeneratorRefC = useRef(null);
  if (sequenceGeneratorRefC.current === null) {
    sequenceGeneratorRefC.current = new SequenceGeneratorA(probabilityArrayC, rowOneMultiplierC, longTermWeightingAddC, longTermWeightingRangeC);
  }
  const sequenceGeneratorC = sequenceGeneratorRefC.current;
	const scoreMethodC = new ScoreMethodA(scoreArrayC);
	const machineC = new BaseMachine(scoreMethodC, sequenceGeneratorC);


	function setNewGameState(newState) {
		setGameState(newState)
	}

	let image1 = image0b
	let image2 = image0c
	let stateOption1 = 'yellow'
	let stateOption2 = 'red'

	if (gameState === 'green') {
		image1 = image0b
		image2 = image0c
		stateOption1 = 'yellow'
		stateOption2 = 'red'
	} else if (gameState === 'yellow') {
		image1 = image0a
		image2 = image0c
		stateOption1 = 'green'
		stateOption2 = 'red'
	} else if (gameState === 'red') {
		image1 = image0a
		image2 = image0b
		stateOption1 = 'green'
		stateOption2 = 'yellow'
	}

	function handleMainButtonClick(machine) {
		nextPokiesNumbers(machine)
		setShowSimulationText(false)
	}

  function nextPokiesNumbers(machine) {
		let winningArray = []
		let nextNumbers = machine.generate()
		checkForPlanetChange(nextNumbers)
		let amountWon = machine.winnings(nextNumbers, winningArray)
		setWinningsArray(winningIndices(winningArray))
		let totalWin = totalWinnings + amountWon - 1
		if (totalWin % 1 !== 0) totalWin = parseFloat(totalWin.toFixed(2))
		setSpins(spins + 1)
		setWinnings(amountWon)
		setTotalWinnings(totalWin)
    let nextNumbersFlattened = flattenOutput(nextNumbers)

    // Set all images to null first
    setDelayedPokieNumbers(Array(15).fill(null));

    // Staggered update of pokie numbers
    nextNumbersFlattened.forEach((num, index) => {
      setTimeout(() => {
        setDelayedPokieNumbers(prev => {
          const newNumbers = [...prev];
          newNumbers[index] = num;
          return newNumbers;
        });
      }, ((index % 5) + 1) * 500); // Staggered delay based on index
    });
  }

	function flattenOutput(array) {
		let flattenedArray = []
		for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 5; j++) {
        flattenedArray.push(array[i][j]);
      }
    }
		return flattenedArray
	}

	function setPokiesNumbers(ansArray) {
		setDelayedPokieNumbers(prev => {
      const newNumbers = [...prev];
      flattenOutput(ansArray).forEach((num, index) => {
        newNumbers[index] = num;
      });
      return newNumbers;
    });
	}

	function winningIndices(winningArray) {
		let indices = []
		for (let i = 0; i < winningArray.length; i++) {
			for (let j = 0; j < winningArray[i].length; j++) {
				let indice = winningArray[i][j][0] * 5 + winningArray[i][j][1]
				if (!indices.includes(indice)) {
					indices.push(indice)
				}
			}
		}
		return indices
	}

	function checkForPlanetChange(answerArray) {
		if (checkForPlanetChangeBool(answerArray)) {
			setTimeout(() => {
				setGameStateChanger(true);
			}, 2500);
		}
	}
	
	function checkForPlanetChangeBool(answerArray) {
		for (let i = 0; i < 3; i++) {
			let lineShipCount = 0
			for (let j = 0; j < 5; j++) {
				if (answerArray[i][j] === 11) {
					lineShipCount++
				}
			}
			if (lineShipCount === 5) {
				return true
			}
		}
		return false
	}

	function handleImageClick(newState) {
    setGameState(newState);
    setGameStateChanger(false);
  }

	function getMachine() {
		if (gameState === 'yellow') {
			return machineB
 		} else if (gameState === 'red') {
			return machineC
		} else {
			return machineA
		}
	}

	function nextRandMachine() {
		let possibleStates = ['green', 'yellow', 'red']
		possibleStates = possibleStates.filter(item => item != gameState)
		let generated = Math.random()
		let finalState = 'green'
		if (generated <= 0.5) {
			finalState = possibleStates[0]
		} else {
			finalState= possibleStates[1]
		}
		setGameState(finalState)
		return stringToMachine(finalState)
	}

	function stringToMachine(string) {
		if (string === 'green') {
			return machineA
		} else if (string === 'yellow') {
			return machineB
		}
		return machineC
	}

	function simulateWinnings(iterations, machine) {
		let sum = 0
		let nextNumbers
		let amountWon
		for (let i = 0; i < iterations; i++) {
			let winningArray = []
			nextNumbers = machine.generate()
			// plant change check
			amountWon = machine.winnings(nextNumbers, winningsArray)
			sum += amountWon
			setWinningsArray(winningIndices(winningArray))
			if (checkForPlanetChangeBool(nextNumbers)) {
				machine = nextRandMachine()
			}
		}
		if (sum !== 0) {
			sum = parseFloat(sum.toFixed(2))
		}
		setSpins(spins + iterations)
		setWinnings(amountWon)
		setTotalWinnings(parseFloat((totalWinnings + sum - iterations * 1.0).toFixed(2)))
		setPokiesNumbers(nextNumbers)
		setShowSimulationText(true)
		setSimulationTexts([iterations, sum, parseFloat(((1.0 * sum / iterations) * 100).toFixed(2))])
		return sum
	}

	// function minimumWin(minimum, iterations) {
	// 	let nextNumbers
	// 	for (let i = 0; i < iterations; i++) {
	// 		let winningArray = []
	// 		nextNumbers = machine.generate()
	// 		// plant change check
	// 		let amountWon = machine.winnings(nextNumbers, winningsArray)
	// 		// amoutn won something
	// 		setWinningsArray(winningIndices(winningArray))
	// 		let totalWin = totalWinnings + amountWon - 1
	// 		if (totalWin % 1 !== 0) totalWin = parseFloat(totalWin.toFixed(2))
	// 		setSpins(spins + 1)
	// 		setWinnings(amountWon)
	// 		setTotalWinnings(totalWin)
	// 		if (checkForPlanetChangeBool(nextNumbers)) {
	// 			machine = nextRandMachine()
	// 		}
	// 	}
	// 	setPokiesNumbers(nextNumbers)
	// 	setShowSimulationText(true)
	// 	setSimulationTexts([iterations, sum.toFixed(2), ((1.0 * sum / iterations) * 100).toFixed(2)])
	// 	return sum
	// }

  return (
    <PageBox>
			<img src={supernova}/>
      <TitleBox>
      </TitleBox>
      <WritingBlock>
      </WritingBlock>
      <br /><br />
			<PokiesInfoBlock>
				<PokiesWriting>{spins}</PokiesWriting>
				<PokiesWriting>{winnings}</PokiesWriting>
				<PokiesWriting>{totalWinnings}</PokiesWriting>
			</PokiesInfoBlock>
      <PokiesScreenBlock>
        <AnswerGrid pokieNumbers={delayedPokieNumbers} winningsArray={winningsArray} gameState={gameState}/>
      </PokiesScreenBlock>
      <br /><br /><br />
      <PokiesInteractBlock>
        <PokiesButtonBlock>
          <StyledButton onClick={() => handleMainButtonClick(getMachine())}/>
        </PokiesButtonBlock>
      </PokiesInteractBlock>
			<br /><br />
			{showSimulationText && <WritingBlock>
				<Title3>Spent:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${simulationTexts[0]}</Title3>
				<Title3>Won:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${simulationTexts[1]}</Title3>
				<Title3>Return rate:&nbsp;&nbsp;{simulationTexts[2]}%</Title3>
			</WritingBlock>}
			<br /><br />
			<TextButtonBox>
				<TextField value={uploadFunds} label="Upload Funds" color="warning" onChange={(e) => setUploadFunds(e.target.value)} sx={{'& .MuiInputBase-input': {color: '#DEEFFF',}}} focused />
				<Button variant="contained" color="warning" onClick={() => setTotalWinnings(totalWinnings + parseInt(uploadFunds))}>Upload Funds</Button>
			</TextButtonBox>
			<br /><br />
			<TextButtonBox>
				<TextField value={simulateSpins} label="Simulations" color="warning" onChange={(e) => setSimulateSpins(e.target.value)} sx={{'& .MuiInputBase-input': {color: '#DEEFFF',}}} focused />
				<Button variant="contained" color="warning" onClick={() => simulateWinnings(parseInt(simulateSpins), stringToMachine(gameState))}>Simulate Outcomes</Button>
			</TextButtonBox>
			<br /><br />
			<TextButtonBox>
				<TextField value={nextWinValue} label="Minimum Win" color="warning" onChange={(e) => setNextWinValue(e.target.value)} sx={{'& .MuiInputBase-input': {color: '#DEEFFF',}}} focused />
				<Button variant="contained" color="warning" onClick={() => setTotalWinnings(totalWinnings + parseInt(uploadFunds))}>Find Minimum Win</Button>
			</TextButtonBox>
			{gameStateChanger && (
        <Overlay>
          <ImageBox>
            <StyledImage src={image1} alt="Planet 1" onClick={() => handleImageClick(stateOption1)} />
            <StyledImage src={image2} alt="Planet 2" onClick={() => handleImageClick(stateOption2)} />
          </ImageBox>
        </Overlay>
      )}
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </PageBox>
  );
}

// Material UI Styles //

const PageBox = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	marginLeft: 'auto',
	marginRight: 'auto',
	width: '60%',
	'@media (max-width: 600px)': {
		width: '90%'
	}
})

const TitleBox = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	marginLeft: 'auto',
	marginRight: 'auto',
	fontFamily: 'Staatliches',
	margin: '0px',
	rowGap: '0px',
	padding: '0px',
	color: '#22305B'
})

const WritingBlock = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'left',
	alignItems: 'flex-start',
	marginTop: '20px',
	fontFamily: 'Fredoka',
})

const PokiesWriting = styled('p')({
	fontSize: '25px',
	color: '#DEEFFF'
})

const PokiesInfoBlock = styled('div')({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	marginLeft: '10px',
	marginRight: '10px',
})

const PokiesScreenBlock = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'left',
	alignItems: 'flex-start',
})

const PokiesInteractBlock = styled('div')({
	display: 'flex',
	flexDirection: 'column',
})

const PokiesButtonBlock = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
})

const StyledButton = styled('button')({
  backgroundColor: '#1e1e1e', // Dark background to represent space
  border: '3px solid #FFD700', 
  borderRadius: '50%', // Circular shape
  width: '80px', // Width of the button
  height: '80px', // Height of the button
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.5s, transform 0.5s',
  '&:hover': {
    backgroundColor: '#00bfff', // Change background on hover
		border: '2px solid #00bfff', // Light blue border
    transform: 'scale(1.2)', // Slightly enlarge on hover
  },
  '&:active': {
    transform: 'scale(0.9)', // Slightly shrink on click
  },
});

const Overlay = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
});

const ImageBox = styled('div')({
  display: 'flex',
  gap: '20px',
});

const StyledImage = styled('img')({
  width: '150px',
  height: '150px',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const Writing = styled('p')({
	color: '#000000',
	marginLeft: '10%',
	textAlign: 'left',
	fontSize: '18px',
	'@media (min-width: 600px)': {
		fontSize: '24px'
	}
})

const Title1 = styled('p')({
	fontSize: '2.3vw',
	margin: '0px',
	marginTop: '25px',
	'@media (max-width: 800px)': {
		fontSize: '3vw'
	},
	'@media (max-width: 500px)': {
		fontSize: '6vw'
	},
})

const Title2 = styled('p')({
	fontSize: '4vw',
	margin: '0px',
	'@media (max-width: 800px)': {
		fontSize: '5.6vw'
	},
	'@media (max-width: 500px)': {
		fontSize: '9.5vw'
	},
})

const Title3 = styled('p')({
	fontSize: '2.3vw',
	color: '#DEEFFF',
	margin: '0px',
	'@media (max-width: 800px)': {
		fontSize: '3vw'
	},
	'@media (max-width: 500px)': {
		fontSize: '6vw'
	},
})

const TextButtonBox = styled('div')({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'start', 
	columnGap: '20px'
})
