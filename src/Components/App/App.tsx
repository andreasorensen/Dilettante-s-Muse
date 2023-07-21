import './App.css';
import ArtCard from '../ArtCard/ArtCard';
import React from 'react';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import { generateID, cleanUpData } from '../../utils';

// interface ArtData {
//   id: number
//   title: String,
//   artistDisplayName: String, 
//   objectDate: String | Number, 
//   primaryImage?: String, 
//   primaryImageSmall?: String
// }
import { ArtData }from '../../utils'
// interface ArtPiece {
//   data: ArtData,
//   isFavorite: boolean
// }

function App() {



const [pieces, setPieces] = useState<ArtData[]>([])

const [hasImage, setHasImage] = useState(false)
const [savePieces, setSavePieces] = useState<ArtData[]>([])

//pass this all the way down again- if savedPIces array contains piece, splice it out

const getArt = (objectID: number) => {
  console.log(' obj ID', objectID)
  return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
  .then(res => res.json())
}
useEffect(()=> {
  const callApi = () => {
    getArt(generateID())
      .then(data => {
        if (data.primaryImage && data.message !== "ObjectID not found") {
          const cleanData: any = cleanUpData(data)
          console.log('DATA WITH IMAGE', cleanData)
          setPieces(prev => [...prev, cleanData])
          return cleanData
        } else if (!data.primaryImage || data.message === "ObjectID not found") {
          callApi()
        } 
      })
  }
console.log('pieces', pieces)
  if (pieces.length < 3) {
    callApi()
  } else if ( pieces.length === 4) {
    pieces.pop()
  }
}, [pieces])

  const setSavedPieces = (id: number | string) => {
    const foundPiece = pieces.find(piece => piece.objectID === id)
    const isAlreadyFavorited = savePieces.some(piece => piece.objectID === id)

    if (foundPiece) {
      if (!isAlreadyFavorited) {
        setSavePieces(prev => [...prev, foundPiece])
      } else {
        setSavePieces(prev => {
          const i = savePieces.indexOf(foundPiece)
          return prev.splice(i, 1)
        })
      }
    }
  }

useEffect(()=> {
  console.log('saved' ,savePieces)
},[savePieces])

  return (
    <div className="App">      
      <Homepage  pieces={pieces} setPieces={setPieces} setSavedPieces={setSavedPieces}/>
    </div>
  );
}

export default App;
