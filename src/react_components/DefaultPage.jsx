import React, { useRef } from 'react'
import { styled } from '@mui/material'
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

	// value of each symbol
  let scoreArray = [180, 25, 27, 29, 31, 33, 100, 150, 250, 600, 1000, 100];
	// probability of each symbol
  let probabilityArray = [40, 70, 71, 72, 73, 74, 82, 76, 65, 20, 14, 17];
	// probability of appearence in subsequent rows if present in row 1
	let rowOneMultiplier = [1.4, 1.05, 1.05, 1.05, 1.05, 1.05, 1.2, 1.2, 1.2, 1.2, 1.2, 1]
	// variables for long term probability effects
	let longTermWeightingAdd = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	let longTermWeightingRange = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

	// backend generator creation start

	// sequence generator A, row 1 alters successive rows
	const sequenceGeneratorRef = useRef(null);
  if (sequenceGeneratorRef.current === null) {
    sequenceGeneratorRef.current = new SequenceGeneratorA(probabilityArray, rowOneMultiplier, longTermWeightingAdd, longTermWeightingRange);
  }
  const sequenceGenerator = sequenceGeneratorRef.current;
	// const sequenceGenerator = new SequenceGeneratorA(probabilityArray, rowOneMultiplier, longTermWeightingAdd, longTermWeightingRange)
  const scoreMethod = new ScoreMethodA(scoreArray);
  const machine = new BaseMachine(scoreMethod, sequenceGenerator);
	// backend generator creation end

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

  function nextPokiesNumbers(machine) {
		let winningArray = []
    let nextNumbers = machine.generate();
		checkForPlanetChange(nextNumbers)
		let amountWon = machine.winnings(nextNumbers, winningArray)
		setWinningsArray(winningIndices(winningArray))
		let totalWin = totalWinnings + amountWon - 1
		if (totalWin % 1 !== 0) totalWin = parseFloat(totalWin.toFixed(2))
		setSpins(spins + 1)
		setWinnings(amountWon)
		setTotalWinnings(totalWin)
    let nextNumbersFlattened = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 5; j++) {
        nextNumbersFlattened.push(nextNumbers[i][j]);
      }
    }

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
		for (let i = 0; i < 3; i++) {
			let lineShipCount = 0
			for (let j = 0; j < 5; j++) {
				if (answerArray[i][j] === 11) {
					lineShipCount++
				}
				if (lineShipCount === 5) {
					setTimeout(() => {
						setGameStateChanger(true);
					}, 2500);
				}
			}
		}
	}

	function handleImageClick(newState) {
    setGameState(newState);
    setGameStateChanger(false);
  }

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
          <StyledButton onClick={() => nextPokiesNumbers(machine)} />
        </PokiesButtonBlock>
      </PokiesInteractBlock>
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
	margin: '0px',
	'@media (max-width: 800px)': {
		fontSize: '3vw'
	},
	'@media (max-width: 500px)': {
		fontSize: '6vw'
	},
})
