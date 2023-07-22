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

const ArtCard = ({pieces, setPieces, setSavedPieces, piece}: Props) => {
//useLocation if on saved page 
// const location = useLocation()
//if location.pathname.includea("saved")
  const [isFavorited, setisFavorited ] = useState(false)

  return (
    <div className='art-card'>
      <p>{piece.title}</p>
      <FaveButton piece={piece} setSavedPieces={setSavedPieces} setPieces={setPieces} isFavorited={isFavorited} pieces={pieces} setisFavorited={setisFavorited } />
    </div>
  )
}

export default ArtCard