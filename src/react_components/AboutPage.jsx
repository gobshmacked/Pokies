import React from 'react'
import { styled } from '@mui/material'

import image0a from './assets/pokie_images/0.png';
import image0b from './assets/pokie_images/0b.png';
import image0c from './assets/pokie_images/0c.png';
import image1a from './assets/pokie_images/1a.png';
import image1b from './assets/pokie_images/1b.png';
import image1c from './assets/pokie_images/1c.png';
import image2a from './assets/pokie_images/2a.png';
import image2b from './assets/pokie_images/2b.png';
import image2c from './assets/pokie_images/2c.png';
import image3a from './assets/pokie_images/3a.png';
import image3b from './assets/pokie_images/3b.png';
import image3c from './assets/pokie_images/3c.png';
import image4a from './assets/pokie_images/4a.png';
import image4b from './assets/pokie_images/4b.png';
import image4c from './assets/pokie_images/4c.png';
import image5a from './assets/pokie_images/5a.png';
import image5b from './assets/pokie_images/5b.png';
import image5c from './assets/pokie_images/5c.png';
import image8a from './assets/pokie_images/8a.png';
import image8b from './assets/pokie_images/8b.png';
import image8c from './assets/pokie_images/8c.png';

import image6 from './assets/pokie_images/6.png';
import image7 from './assets/pokie_images/7.png';
import image9 from './assets/pokie_images/9.png';
import image10 from './assets/pokie_images/10.png';
import image11 from './assets/pokie_images/11.png';
import image12 from './assets/pokie_images/12.png';

export function AboutPage() {
	return (
		<AboutWrapper>
			<WritingBlock>
				<InstructionHeading2>Quickstart Guide</InstructionHeading2>
				<LineSeperator/>
				<br/><br/>
				<InstructionHeading>Winning</InstructionHeading>
				<Writing>Win by matching 3 or more along a line</Writing>
				<br/><br/>
				<InstructionHeading>Wilds:</InstructionHeading>
				<ImageBox>
					<img src={image0a} width = '15%'/>
					<img src={image0b} width = '15%'/>
					<img src={image0c} width = '15%'/>
				</ImageBox>
				<InstructionHeading>Feature:</InstructionHeading>
				<ImageBox>
					<img src={image11} width = '15%'/>
					<BigWriting>x5</BigWriting>
				</ImageBox>
				<InstructionHeading>High Value:</InstructionHeading>
				<ImageBox>
					<img src={image9} width = '15%'/>
					<BigWriting>&lt;</BigWriting>
					<img src={image12} width = '15%'/>
					<BigWriting>&lt;</BigWriting>
					<img src={image10} width = '15%'/>
				</ImageBox>
				<InstructionHeading>Medium Value:</InstructionHeading>
				<ImageBox>
					<img src={image6} width = '15%'/>
					<BigWriting>&lt;</BigWriting>
					<img src={image7} width = '15%'/>
					<BigWriting>&lt;</BigWriting>
					<img src={image8a} width = '15%'/>
				</ImageBox>
				<InstructionHeading>Low Value:</InstructionHeading>
				<ImageBox>
					<img src={image1a} width = '15%'/>
					<BigWriting>&lt;</BigWriting>
					<img src={image2a} width = '15%'/>
					<BigWriting>&lt;</BigWriting>
					<img src={image3a} width = '15%'/>
					<BigWriting>&lt;</BigWriting>
					<img src={image4a} width = '15%'/>
					<BigWriting>&lt;</BigWriting>
					<img src={image5a} width = '15%'/>
				</ImageBox>
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

const ImageBox = styled('div')({
	display: 'flex',
	flexDirection: 'row'
})

export const WritingBlock = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'left',
	alignItems: 'flex-start',
	marginTop: '20px',
})

export const InstructionHeading = styled('p')({
	color: '#DEEFFF',
	fontFamily: 'Staatliches',
	fontSize: '35px',
})

export const InstructionHeading2 = styled('p')({
	color: '#DEEFFF',
	fontFamily: 'Staatliches',
	fontSize: '40px',
})

export const Writing = styled('p')({
	color: '#DEEFFF',
	fontFamily: 'Fredoka',
	marginLeft: '2%',
	textAlign: 'left',
	fontSize: '18px',
	'@media (min-width: 600px)': {
		fontSize: '24px'
	}
})

const BigWriting = styled('p')({
	color: '#DEEFFF',
	fontFamily: 'Fredoka',
	marginLeft: '2%',
	textAlign: 'left',
	fontSize: '40px',
	'@media (min-width: 600px)': {
		fontSize: '52px'
	}
})

const Bold = styled('p')({
	fontWeight: 'bold',
	color: '#22305B',
})

export const LineSeperator = styled('hr')({
	width: '100%',
})
