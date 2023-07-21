import React, { useState } from 'react';
import './ArtCard.css';
import FaveButton from '../FaveButton/FaveButton';
import { ArtData }from '../../utils'

interface ArtPiece {
  data: ArtData,
  isFavorite: boolean
}

interface Props {
  // id: number | string,
  pieces: ArtPiece[],
  setPieces: (value: React.SetStateAction<ArtPiece[]>) => void,
  setSavedPieces: (id: number | string) => void, 
  piece: ArtPiece
}

const ArtCard = ({pieces, setPieces, setSavedPieces, piece}: Props) => {

  const [artPiece, setArtPiece ] = useState(false)

  return (
    <div className='art-card'>
      <p>{piece.data.title}</p>
      <FaveButton piece={piece} setSavedPieces={setSavedPieces} setPieces={setPieces} artPiece={artPiece} pieces={pieces} setArtPiece={setArtPiece } />
    </div>
  )
}

export default ArtCard