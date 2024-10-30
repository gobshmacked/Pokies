import React from 'react'
import { styled } from '@mui/material'
import {WritingBlock, InstructionHeading2, Writing} from './AboutPage'

export function ContactPage() {
	return (
		<ContactWrapper>
			<WritingBlock>
				<InstructionHeading2>Contact</InstructionHeading2>
				<Writing>If you want to leave feedback or report bugs send an email to:</Writing>
				<Writing>politicalalignment@gmail.com</Writing>
				<Writing>All feedback is greatly appreciated!</Writing>
				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
			</WritingBlock>
		</ContactWrapper>
	)
}

// Material UI Styles //

const ContactWrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	width: '50%',
	marginLeft: 'auto',
	marginRight: 'auto',
	'@media (max-width: 600px)': {
		width: '90%'
	}
})