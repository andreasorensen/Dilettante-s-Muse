import React from 'react';
import './FaveButton.css';
import notFave from '../../images/notsaved.png';
import fave from '../../images/saved.png';
import { ArtData }from '../../utils';

interface Props {
  pieces: ArtData[],
  setPieces: (value: React.SetStateAction<ArtData[]>) => void,
  setArtPiece: React.Dispatch<React.SetStateAction<boolean>>,
  artPiece: boolean,
  setSavedPieces: (id: number | string) => void,
  piece: ArtData
}

const FaveButton = ({piece, pieces, setPieces, setArtPiece, artPiece, setSavedPieces}: Props) => {

  const toggleFave = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    // const id = (e.target as HTMLInputElement).id;
    const index = pieces.indexOf(piece)
    setArtPiece(prev => !prev)
    setSavedPieces(piece.objectID)
  }

  return (
    <div>
      {artPiece ? 
      <img className='fave-icon' onClick={(e) => {toggleFave(e)}} src={fave} />
      :<img className='fave-icon' onClick={(e) => {toggleFave(e)}} src={notFave} />}
    </div>
  )
}

export default FaveButton

