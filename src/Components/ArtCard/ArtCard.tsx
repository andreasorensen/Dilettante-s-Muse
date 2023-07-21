import React from 'react';
import './ArtCard.css';
import FaveButton from '../FaveButton/FaveButton';

const ArtCard = () => {
  return (
    <div className='art-card'>
      <FaveButton id={3} />
    </div>
  )
}

export default ArtCard