import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material'
import loadingIcon from './assets/pokie_images/loading.png';
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


export function AnswerGrid(props) {
  const images = [image0a, image1a, image2a, image3a, image4a, image5a, image6, image7, image8a, image9, image10, image11, image12];
	if (props.gameState === 'green') {
		images[0] = image0a
		images[1] = image1a
		images[2] = image2a
		images[3] = image3a
		images[4] = image4a
		images[5] = image5a
		images[8] = image8a
	} else if (props.gameState === 'yellow') {
		images[0] = image0b
		images[1] = image1b
		images[2] = image2b
		images[3] = image3b
		images[4] = image4b
		images[5] = image5b
		images[8] = image8b
	} else if (props.gameState === 'red') {
		images[0] = image0c
		images[1] = image1c
		images[2] = image2c
		images[3] = image3c
		images[4] = image4c
		images[5] = image5c
		images[8] = image8c
	}

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

