import React from 'react'
import { styled } from '@mui/material'
import { AnswerGrid } from './AnswerGrid'
import { BaseMachine } from '../pokies_maths/classes/BaseMachine.js'
import { ScoreMethodA } from '../pokies_maths/classes/ScoreMethodA.js'
import supernova from './assets/supernovalogo.png'
import './cssStyles/DefaultPage.css'

export function DefaultPage(props) {
  const [delayedPokieNumbers, setDelayedPokieNumbers] = React.useState([5, 8, 6, 9, 6, 0, 4, 6, 9, 3, 10, 10, 6, 1, 0]);
	const [spins, setSpins] = React.useState(0)
	const [winnings, setWinnings] = React.useState(0)
	const [totalWinnings, setTotalWinnings] = React.useState(0)

  let scoreArray = [180, 25, 27, 29, 31, 33, 100, 150, 250, 600, 1000];
  let probabilityArray = [40, 70, 71, 72, 73, 74, 82, 76, 65, 20, 14];

  const scoreMethod = new ScoreMethodA(scoreArray);
  const machine = new BaseMachine(probabilityArray, scoreMethod);

  function nextPokiesNumbers(machine) {
    let nextNumbers = machine.generate();
		let amountWon = machine.winnings(nextNumbers)
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

  return (
    <PageBox>
			<img src={supernova}/>
      <TitleBox>
      </TitleBox>
      <WritingBlock>
      </WritingBlock>
      <br /><br /><br />
			<PokiesInfoBlock>
				<PokiesWriting>{spins}</PokiesWriting>
				<PokiesWriting>{winnings}</PokiesWriting>
				<PokiesWriting>{totalWinnings}</PokiesWriting>
			</PokiesInfoBlock>
			<br />
      <PokiesScreenBlock>
        <AnswerGrid pokieNumbers={delayedPokieNumbers} />
      </PokiesScreenBlock>
      <br /><br /><br />
      <PokiesInteractBlock>
        <PokiesButtonBlock>
          <StyledButton onClick={() => nextPokiesNumbers(machine)} />
        </PokiesButtonBlock>
      </PokiesInteractBlock>
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
})

const PokiesInfoBlock = styled('div')({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
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
