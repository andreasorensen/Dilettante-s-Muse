import React from 'react';
import './FaveButton.css';
import notFave from '../../images/notsaved.png';
import fave from '../../images/saved.png';
import { ArtData }from '../../utils';
import { set } from 'cypress/types/lodash';

interface ArtPiece {
  data: ArtData,
  isFavorite: boolean
}

interface Props {
  id: number | string,
  pieces: ArtPiece[],
  setPieces: (value: React.SetStateAction<ArtPiece[]>) => void,
  setArtPiece: React.Dispatch<React.SetStateAction<boolean>>,
  artPiece: boolean,
  setSavedPieces: React.Dispatch<React.SetStateAction<ArtPiece[]>>
}

const FaveButton = ({id, pieces, setPieces, setArtPiece, artPiece, setSavedPieces}: Props) => {

  const toggleFave = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const id = (e.target as HTMLInputElement).id;
    pieces.forEach(piece => {
      if (piece.data.id === parseInt(id)) {
        const index = pieces.indexOf(piece)
        setPieces(prev => {
          prev[index].isFavorite = !prev[index].isFavorite
          return prev
        })
        console.log('prev', piece.isFavorite)
        setArtPiece(prev => !prev)
        setSavedPieces(prev => [...prev, piece])
      }
    })
  }

  return (
    <div>
      {artPiece ? 
      <img className='fave-icon' id={`${id}`} onClick={(e) => {toggleFave(e)}} src={fave} />
      :<img className='fave-icon' id={`${id}`} onClick={(e) => {toggleFave(e)}} src={notFave} />}
    </div>
  )
}

export default FaveButton

