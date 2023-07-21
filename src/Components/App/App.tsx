import './App.css';
import ArtCard from '../ArtCard/ArtCard';

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';


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

const [piece1, setPiece1] = useState<ArtPiece>(
  {
    data: 
      { 
      id: 1,
      title: "This Test", 
      artistDisplayName: "Test",
      objectDate: 1999,
      primaryImage: "https://images.metmuseum.org/CRDImages/ad/web-large/52601.jpg" 
      },
      isFavorite: false
})

const [piece2, setPiece2] = useState<ArtPiece>(
  {
    data: 
      { 
      id: 2,
      title: "This Test", 
      artistDisplayName: "Test",
      objectDate: 1999,
      primaryImage: "https://images.metmuseum.org/CRDImages/ad/web-large/52601.jpg" 
      },
      isFavorite: false
})

const [piece3, setPiece3] = useState<ArtPiece>(
  {
    data: 
      { 
      id: 3,
      title: "This Test", 
      artistDisplayName: "Test",
      objectDate: 1999,
      primaryImage: "https://images.metmuseum.org/CRDImages/ad/web-large/52601.jpg" 
      },
      isFavorite: false
})

//piece1.isFavorite ? "fave" : "notFave"
 
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage piece1={piece1} piece2={piece1} piece3={piece1}/>} />
    </Routes>
    <div className="App">
    </div>
    </>
  )
}

export default App;
