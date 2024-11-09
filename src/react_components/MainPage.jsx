import React from 'react'
import { styled } from '@mui/material'
import { DefaultPage } from './DefaultPage'
import { AboutPage } from './AboutPage'
import './cssStyles/fonts.css'


export function MainPage(props) {
	return (
		<Page>
			{props.currentPage === 'default' && <DefaultPage pageStateChange = {props.pageStateChange}/>}
			{props.currentPage === 'about' && <AboutPage pageStateChange = {props.pageStateChange}/>}
		</Page>
	)
}

// Material UI Styles //

const Page = styled('div')({
	display: 'flex',
	background: '#164570',
	height: '100'
})
