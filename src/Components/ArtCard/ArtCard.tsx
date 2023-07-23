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

  const [isFavorited, setIsFavorited ] = useState(false)

  return (
    <div className='art-card'>
      <div className='image-container'>
        <img className='image' src={piece.primaryImage} alt={piece.title}/>
        <FaveButton piece={piece} setSavedPieces={setSavedPieces} setPieces={setPieces} artPiece={isFavorited} pieces={pieces} setArtPiece={setIsFavorited } />
      </div>
      <div className='details-container'>
        <p className='title'>{piece.title}</p>
        <p className='artist'>{piece.artistDisplayName}</p>
        <p className='date'>{piece.objectDate}</p>
      </div>
    </div>
  )
}


// add <> to return, then add the image below & and allow the entire art card to be behind it, by putting 

export default ArtCard