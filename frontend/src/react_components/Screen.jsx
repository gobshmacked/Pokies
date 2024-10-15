import React from 'react'
import { SideBar } from './SideBar'
import { MainPage } from './MainPage'
import { styled } from '@mui/material'

export function Screen () {
	const [page, setPage] = React.useState('default')
	const [sideBarShow, setSideBarShow] = React.useState('hide')
	function newPageState (newPage) {
		setPage(newPage)
		window.scrollTo(0,0);
	}
	function newSideBarShow (newShow) {
		setSideBarShow(newShow)
	}
	return (
		<>
			<AllElementsWrap>
				<SideBarMainPageDiv>
					<SideBar pageStateChange = {newPageState} currentPage = {page} sideBarShow = {sideBarShow} sideBarShowChange = {newSideBarShow}/>
					{<MainPage currentPage = {page} pageStateChange = {newPageState} sideBarShow = {sideBarShow}/>}
				</SideBarMainPageDiv>
			</AllElementsWrap>
   		</>
  	)
}

// Material UI Styles //

const SideBarMainPageDiv = styled('div')({
	width: '100%',
	fontFamily: 'Arial',
	height: '100vh'
})

const AllElementsWrap = styled('div')({
	height: '100%'
})
