import './App.css';
import getArt from '../../ApiCalls';
import { objectID, cleanUpData, generateID } from '../../utils';
import {useEffect, useState} from 'react';
import { ArtData } from '../../utils';
import React from 'react';

function App() {
// console.log(getArt)
// console.log(objectID)
const [hasImage, setHasImage] = useState(false)
// // const [err, setErr] = useState(false)

// {
//   data: 
//     { 
//     id: 2,
//     title: "This Test", 
//     artistDisplayName: "Test",
//     objectDate: 1999,
//     primaryImage: "https://images.metmuseum.org/CRDImages/ad/web-large/52601.jpg" 
//     },
//     isFavorite: false
// }

const [pieces, setPieces] = useState<any[]>([])
//change this from any

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

useEffect(()=> {
  console.log('pic',pieces)
},[pieces])

const renderPieces = () => {
  const allPieces = pieces?.map(piece => <p key={Date.now() + pieces.indexOf(piece)}> {piece.data.title}</p>)
  return allPieces.slice(0, 3)
  //add error handling for if only 2 pieces show up
}

  return (
    <div className="App">      
      {pieces && renderPieces()}
    </div>
  );
}

export default App;



