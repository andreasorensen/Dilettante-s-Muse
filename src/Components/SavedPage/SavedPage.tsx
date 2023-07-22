import React from 'react'
import { ArtData }from '../../utils';
interface Props{
  savePieces: ArtData[]
}
const SavedPage = ({ savePieces }: Props) => {
  console.log("savePiecesssss", savePieces)
  return (
    <div>SavedPage</div>
  )
}

export default SavedPage