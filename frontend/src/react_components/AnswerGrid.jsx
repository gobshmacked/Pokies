import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material'
import loadingIcon from './assets/pokie_images/12.png';
import image0 from './assets/pokie_images/0.png';
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
  const images = [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];

  return (
    <PokerMachineGrid>
      {props.pokieNumbers.map((icon, index) => (
        <GridItem key={index} highlight={props.winningsArray.includes(index)}>
          {icon !== null ? (
            <img src={images[icon]} alt={`Grid item ${index + 1}`} />
          ) : (
            <LoadingIcon src={loadingIcon} alt="Loading" />
          )}
        </GridItem>
      ))}
    </PokerMachineGrid>
  );
}

const PokerMachineGrid = styled('div')({
	display: 'grid',
	gridTemplateColumns: 'repeat(5, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
  gap: '10px',
})

const GridItem = styled('div')(({ highlight }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  border: highlight ? '4px solid orange' : 'none', // Highlight with orange border
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

const LoadingIcon = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
	borderRadius: '50%',
  animation: 'spin 2s linear infinite',
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
});

