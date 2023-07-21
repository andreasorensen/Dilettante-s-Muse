import './App.css';
import getArt from '../../ApiCalls';
import { objectID, cleanUpData, generateID } from '../../utils';
import {useEffect, useState} from 'react';
import { ArtData } from '../../utils';

function App() {
// console.log(getArt)
// console.log(objectID)
const [hasImage, setHasImage] = useState(false)
// const [err, setErr] = useState(false)

const [pieces, setPieces] = useState<ArtData[]>([])

useEffect(()=> {
  const callApi = () => {
    getArt(generateID())
      .then(data => {
        if (data.primaryImage && data.message !== "ObjectID not found") {
          const cleanData: any = cleanUpData(data)
          console.log('DATA WITH IMAGE', cleanData)
          setPieces(prev => [...prev, data])
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
  const allPieces = pieces?.map(piece => <p key={Date.now() + pieces.indexOf(piece)}> {piece.title}</p>)
  return allPieces.slice(0, 3)
}

  return (
    <div className="App">      
      {pieces && renderPieces()}
      //add error handling for when there are only two pieces for some reason
    </div>
  );
}

export default App;



