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
interface ArtPiece {
  data: ArtData,
  isFavorite: boolean
}

function App() {



const [pieces, setPieces] = useState<ArtPiece[]>([])

const [hasImage, setHasImage] = useState(false)
const [savePieces, setSavePieces] = useState<ArtPiece[]>([])

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
          const cleanData: any = {data: cleanUpData(data), isFavorite: false}
          console.log('DATA WITH IMAGE', cleanData)
          setPieces(prev => [...prev, cleanData])
          return cleanData
        } else {
          setHasImage(prev => !prev)
          const cleanData: any = cleanUpData(data)
          console.log('DATA WITHOUT', cleanData)
        }
      })
  }

  if (pieces.length < 3) {
    callApi()
  }
}, [hasImage, pieces])

  const setSavedPieces = (id: number | string) => {
    const foundPiece = pieces.find(piece => piece.data.objectID === id)
    const isAlreadyFavorited = savePieces.some(piece => piece.data.objectID === id)

    if (foundPiece) {
      if (!isAlreadyFavorited) {
        console.log('hiiii')
        setSavePieces(prev => [...prev, foundPiece])
      } else {
        console.log('heyooooo')
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
