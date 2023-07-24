import React from 'react';
import './FaveButton.css';
import notFave from '../../images/notsaved.png';
import fave from '../../images/saved.png';
import { ArtData }from '../../utils';
import { useLocation } from 'react-router-dom';

interface Props {
  setisFavorited: React.Dispatch<React.SetStateAction<boolean>>,
  isFavorited: boolean,
  setSavedPieces: (piece: ArtData) => void,
  piece: ArtData
}

const FaveButton = ({piece, setisFavorited, isFavorited, setSavedPieces}: Props) => {
  const location = useLocation()

  const toggleFave = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    setisFavorited(prev => !prev)
    setSavedPieces(piece)
  }

  return (
    <div>
      {location.pathname.includes("saved") ? <img className='fave-icon' onClick={(e) => {toggleFave(e)}} src={fave} /> : 
      isFavorited ? 
      <img className='fave-icon' onClick={(e) => {toggleFave(e)}} src={fave} />
      :<img className='fave-icon' onClick={(e) => {toggleFave(e)}} src={notFave} />}
    </div>
  )
}

export default FaveButton

