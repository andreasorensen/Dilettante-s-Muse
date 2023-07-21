import React, { useState } from 'react';
import './ArtCard.css';
import FaveButton from '../FaveButton/FaveButton';
import { ArtData }from '../../utils'


interface Props {
  pieces: ArtData[],
  setPieces: (value: React.SetStateAction<ArtData[]>) => void,
  setSavedPieces: (id: number | string) => void, 
  piece: ArtData
}

const ArtCard: React.FC<Props> = ({pieces, setPieces, setSavedPieces, piece}: Props) => {

  const [artPiece, setArtPiece ] = useState(false)

  return (
    <div className='art-card'>
      <div className='image-container'></div>
      <img className='image' src={piece.primaryImage} alt={piece.title}/>
      <p className='title'>{piece.title}</p>
      <p className='artist'>{piece.artistDisplayName}</p>
      <p className='date'>{piece.objectDate}</p>
      <FaveButton piece={piece} setSavedPieces={setSavedPieces} setPieces={setPieces} artPiece={artPiece} pieces={pieces} setArtPiece={setArtPiece } />
    </div>
  )
}

export default ArtCard