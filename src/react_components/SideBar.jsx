import React from 'react'
import { styled } from '@mui/material'
import sandwich from './assets/sandwich.png';
import './cssStyles/fonts.css'

export function SideBar(props) {
	if (props.sideBarShow === 'show') {
		return (<SideBarShow pageStateChange = {props.pageStateChange} sideBarShowChange = {props.sideBarShowChange}/>)
	} else {
		return (<SideBarHide pageStateChange = {props.pageStateChange} sideBarShowChange = {props.sideBarShowChange}/>)
	}
}

function SideBarShow(props) {
	return (
		<SideBarDiv>
			<br/>
			<SideBarOut onClick = {() => props.sideBarShowChange('hide')}><SandwichOut alt = 'side bar button' src = {sandwich}/></SideBarOut>
			<br/>
			<SideBarElement onClick = {() => props.pageStateChange('default')}>Machine</SideBarElement>
			<SideBarElement onClick = {() => props.pageStateChange('about')}>About</SideBarElement>
		</SideBarDiv>
	)
}

function SideBarHide(props) {
	return (
		<SideBarDivHide>
			<br/>
			<SideBarIn onClick = {() => props.sideBarShowChange('show')}><SandwichIn alt = 'side bar button' src = {sandwich}/></SideBarIn>
		</SideBarDivHide>
	)
}

// Material UI Styles //

const SideBarDiv = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	background: '#22305B',
	position: 'fixed',
	top: '0',
	left: '0',
	width: '10%',
	height: '100vh',
	zIndex: '5',
	'@media (max-width: 600px)': {
		width: '30%'
	}
})

const SideBarDivHide = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	position: 'fixed',
	top: '0',
	left: '0',
	width: '10%',
	height: '100vh',
})

const SideBarElement = styled('p')({
	fontSize: '20px',
	color: 'whitesmoke',
	fontFamily: 'Fredoka'
})

const SideBarHideButton = styled('button')({
	fontWeight: 'bold',
	border: '0px',
	borderRadius: '5px',
	fontSize: '20px',
})

const SideBarIn = styled(SideBarHideButton)({
	background: '#164570',
})

const SideBarOut = styled(SideBarHideButton)({
	background: '#22305B',
	marginRight: 'auto'
})

const Sandwich = styled('img')({
	background: '#164570',
	margin: '0px',
	width: '35%',
	'@media (max-width: 600px)': {
		width: '30px'
	}
})

const SandwichIn = styled(Sandwich)({
	background: '#164570',
})

const SandwichOut = styled(Sandwich)({
	background: '#22305B'
})
