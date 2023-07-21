import './App.css';
import ArtCard from '../ArtCard/ArtCard';

import { useEffect, useState } from 'react';
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

const [pieces, setPieces] = useState<ArtPiece[]>([
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
},
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
},
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
}
])
 
const [savedPieces, setSavedPieces] = useState<ArtPiece[]>([])
console.log(savedPieces)
//pass this all the way down again- if savedPIces array contains piece, splice it out

  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage pieces={pieces} setSavedPieces={setSavedPieces} setPieces={setPieces} />} />
    </Routes>
    <div className="App">
    </div>
    </>
  )
}

export default App;
