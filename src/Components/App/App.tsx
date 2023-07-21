import './App.css';
import getArt from '../../ApiCalls';
import { objectID, cleanUpData } from '../../utils';
import {useEffect, useState} from 'react'

function App() {
console.log(getArt)
console.log(objectID)
const [hasImage, setHasImage] = useState(false)
// const [err, setErr] = useState(false)

useEffect(()=> {
  getArt(objectID)
  .then(data => {
    if(data.primaryImage && data.message !== "ObjectID not found") {
    const cleanData:any = cleanUpData(data)
    // setHasImage(true)
    console.log('DATA WITH IMAGE', cleanData)
      return cleanData
    } else {
      setHasImage(prev => !prev)
      const cleanData:any = cleanUpData(data)
      console.log('DATA WITHOUT', cleanData)
    }
  }) 
}, [hasImage])


  return (
    <div className="App">        
    </div>
  );
}

export default App;



