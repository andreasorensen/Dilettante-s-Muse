import React from 'react'
import { ArtData }from '../../utils'
import ArtCard from '../ArtCard/ArtCard'

interface ArtPiece {
  data: ArtData,
  isFavorite: boolean
}


interface Props {
  piece1: ArtPiece,
  piece2: ArtPiece,
  piece3: ArtPiece
}

const Homepage = ({piece1, piece2, piece3}: Props) => {
  return (
    <div>Homepage
      <ArtCard id={piece1.data.id}/>
      <ArtCard id={piece2.data.id}/>
      <ArtCard id={piece3.data.id}/>
    </div>
  )
}

export default Homepage