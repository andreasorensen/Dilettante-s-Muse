import React from 'react';
import './ArtCard.css';
import FaveButton from '../FaveButton/FaveButton';

interface Props {
  id: number
}

const ArtCard = ({id}: Props) => {
  return (
    <div className='art-card'>
      <FaveButton id={id} />
    </div>
  )
}

export default ArtCard