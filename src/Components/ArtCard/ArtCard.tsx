import React, { useState } from 'react';
import './ArtCard.css';
import FaveButton from '../FaveButton/FaveButton';
import { ArtData }from '../../utils'

interface ArtPiece {
  data: ArtData,
  isFavorite: boolean
}

interface Props {
  id: number | string,
  pieces: ArtPiece[],
  setPieces: (value: React.SetStateAction<ArtPiece[]>) => void,
  setSavedPieces: React.Dispatch<React.SetStateAction<ArtPiece[]>>
}

const ArtCard = ({id, pieces, setPieces, setSavedPieces}: Props) => {

  const [artPiece, setArtPiece ] = useState(false)

  return (
    <div className='art-card'>
      <FaveButton setSavedPieces={setSavedPieces} setPieces={setPieces} artPiece={artPiece} pieces={pieces} setArtPiece={setArtPiece } id={id} />
    </div>
  )
}

export default ArtCard