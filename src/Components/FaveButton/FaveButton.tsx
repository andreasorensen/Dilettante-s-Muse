import React from 'react';
import './FaveButton.css';
import notFave from '../../images/notsaved.png';
import fave from '../../images/saved.png'

interface Props {
  id: number
}

const FaveButton = ({id}: Props) => {
  return (
    <div>
      <img className='fave-icon' src={notFave} />
      <img className='fave-icon' src={fave} />
    </div>
  )
}

export default FaveButton