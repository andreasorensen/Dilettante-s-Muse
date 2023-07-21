import React from 'react'
import { ArtData }from '../../utils'
import ArtCard from '../ArtCard/ArtCard'


interface ArtPiece {
  data: ArtData,
  isFavorite: boolean
}

interface Props {
  pieces: ArtPiece[],
  setPieces: (value: React.SetStateAction<ArtPiece[]>) => void,
  setSavedPieces: React.Dispatch<React.SetStateAction<ArtPiece[]>>
}

const Homepage = ({ pieces, setPieces, setSavedPieces }: Props) => {

  return (
    <div>Homepage
      {pieces.map(piece => <ArtCard key={piece.data.id} setPieces={setPieces} setSavedPieces={setSavedPieces} pieces={pieces} id={piece.data.id}/> )}
    </div>
  )
}

export default Homepage