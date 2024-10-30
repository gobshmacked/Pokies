import React from 'react'
import { styled } from '@mui/material'

export function AboutPage() {
	return (
		<AboutWrapper>
			<WritingBlock>
				<InstructionHeading2>About</InstructionHeading2>
				<LineSeperator/>
				<br/><br/>
				<InstructionHeading>Subheading</InstructionHeading>
				<Writing>The Political Alignment Test is a series of questions that measure a person's political and philosophical views.</Writing>
				<Writing>The test should only be used as a rough guide of your views as political and philosophical beliefs are too complex to be perfectly captured by a test.</Writing>
				<br/><br/>
				<LineSeperator/>
				<br/>
				<InstructionHeading>What is being measured by the test?</InstructionHeading>
				<Writing>The Political Alignment Test measures and places you on 3 scales:</Writing>
				<Writing>1. The Economic scale measured on the Left-Right axis</Writing>
				<Writing>2. The Social scale measured on the Libertarian-Authoritarian axis</Writing>
				<Writing>3. Either the Rational Egoism scale or Utilitarianism scale depending on which one your answers more closely align with</Writing>
				<br/><br/>
				<LineSeperator/>
				<br/><br/>
				<InstructionHeading>Definitions</InstructionHeading>
				<Writing><Bold>Left:</Bold> Refers to left wing views characterised by increased levels of government intervention in the economy, often in the form of taxation, government spending or the operation of state owned businesses</Writing>
				<Writing><Bold>Right:</Bold> Refers to right wing views characterised by decreased levels of government intervention in the economy, often in the form of less taxes and limited restrictions on the free market</Writing>
				<Writing><Bold>Libertarian:</Bold> Refers to views characterised by fewer restrictions on individual rights, often in the form of fewer laws</Writing>
				<Writing><Bold>Authoritarian:</Bold> Refers to views characterised by greater restrictions on indiviudal rights, often in the form of more restrictive laws and greater punishment for wrongdoing</Writing>
				<Writing><Bold>Utilitarianism:</Bold> The idea that producing the greatest good for the greatest number is the goal, and actions that align with this goal are good and ones that don't are bad</Writing>
				<Writing><Bold>Rational Egoism:</Bold> The idea that maximising ones own self interests is the right thing to do</Writing>
				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
			</WritingBlock>
		</AboutWrapper>
	)
}

// Material UI Styles //

const AboutWrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	width: '50%',
	marginLeft: 'auto',
	marginRight: 'auto',
	'@media (max-width: 600px)': {
		width: '90%'
	}
})

export const WritingBlock = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'left',
	alignItems: 'flex-start',
	marginTop: '20px',
})

export const InstructionHeading = styled('p')({
	color: '#22305B',
	fontFamily: 'Staatliches',
	fontSize: '35px',
})

export const InstructionHeading2 = styled('p')({
	color: '#22305B',
	fontFamily: 'Staatliches',
	fontSize: '40px',
})

export const Writing = styled('p')({
	color: '#000000',
	fontFamily: 'Fredoka',
	marginLeft: '2%',
	textAlign: 'left',
	fontSize: '18px',
	'@media (min-width: 600px)': {
		fontSize: '24px'
	}
})

const Bold = styled('p')({
	fontWeight: 'bold',
	color: '#22305B',
})

export const LineSeperator = styled('hr')({
	width: '100%',
})
