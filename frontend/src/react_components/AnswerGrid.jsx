import React from 'react'
import { styled } from '@mui/material'
import image1 from './assets/pokie_images/1.png';
import image2 from './assets/pokie_images/2.png';
import image3 from './assets/pokie_images/3.png';
import image4 from './assets/pokie_images/4.png';
import image5 from './assets/pokie_images/5.png';
import image6 from './assets/pokie_images/6.png';
import image7 from './assets/pokie_images/7.png';
import image8 from './assets/pokie_images/8.png';
import image9 from './assets/pokie_images/9.png';
import image10 from './assets/pokie_images/10.png';
import image11 from './assets/pokie_images/11.png';
import image12 from './assets/pokie_images/12.png';


export function AnswerGrid(props) {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];
	const iconArray = props.pokieNumbers;
	return (
	<PokerMachineGrid>
      {iconArray.map((icon, index) => (
        <GridItem key={index}>
          <img src={images[icon]} alt={`Grid item ${index + 1}`} />
        </GridItem>
      ))}
    </PokerMachineGrid>
	)
}

const PokerMachineGrid = styled('div')({
	display: 'grid',
	gridTemplateColumns: 'repeat(5, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
  gap: '10px',
})

const GridItem = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const stub = () => {
	return [1,7,4,5,8,3,2,5,5,4,3,3,2,8,9]
}