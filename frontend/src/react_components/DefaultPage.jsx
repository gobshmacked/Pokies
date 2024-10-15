import React from 'react'
import { styled } from '@mui/material'
import './cssStyles/DefaultPage.css'

export function DefaultPage(props) {
	return (
		<PageBox>
			<TitleBox>
				<Title1>Title</Title1>
				<Title2>Second title</Title2>
				<Title3>Third title</Title3>
			</TitleBox>
			<WritingBlock>
				<Writing>Writing 1</Writing>
				<Writing>Writing 2</Writing>
				<Writing>Writing 3</Writing>
				<Writing>Writing 4</Writing>
			</WritingBlock>
			<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
		</PageBox>
	)
}

// Material UI Styles //

const PageBox = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	marginLeft: 'auto',
	marginRight: 'auto',
	width: '55%',
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
