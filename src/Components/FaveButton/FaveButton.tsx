import React from 'react';
import './FaveButton.css';
import notFave from '../../images/notsaved.png';
import fave from '../../images/saved.png';
import { ArtData }from '../../utils';
import { useLocation } from 'react-router-dom';

interface Props {
  pieces: ArtData[],
  setPieces: (value: React.SetStateAction<ArtData[]>) => void,
  setisFavorited: React.Dispatch<React.SetStateAction<boolean>>,
  isFavorited: boolean,
  setSavedPieces: (id: number | string) => void,
  piece: ArtData
}

const FaveButton = ({piece, pieces, setPieces, setisFavorited, isFavorited, setSavedPieces}: Props) => {
  const location = useLocation()
  //if location.pathname.includea("saved") then render image src {fave} else
  // check isFavorited 
  const toggleFave = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    // const id = (e.target as HTMLInputElement).id;
    const index = pieces.indexOf(piece)
    setisFavorited(prev => !prev)
    setSavedPieces(piece.objectID)
  }
//when artcard rendered onSaved page set state to true 
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

