import React, { useState } from 'react';
import './ArtCard.css';
import FaveButton from '../FaveButton/FaveButton';
import { ArtData }from '../../utils'


interface Props {
  // id: number | string,
  pieces: ArtData[],
  setPieces: (value: React.SetStateAction<ArtData[]>) => void,
  setSavedPieces: (id: number | string) => void, 
  piece: ArtData
}

const ArtCard = ({pieces, setPieces, setSavedPieces, piece}: Props) => {

  const [artPiece, setArtPiece ] = useState(false)

  return (
    <div className='art-card'>
      <p>{piece.title}</p>
      <FaveButton piece={piece} setSavedPieces={setSavedPieces} setPieces={setPieces} artPiece={artPiece} pieces={pieces} setArtPiece={setArtPiece } />
    </div>
  )
}

export default ArtCard