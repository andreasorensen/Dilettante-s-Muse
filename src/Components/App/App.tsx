import './App.css';
import ArtCard from '../ArtCard/ArtCard';

interface ArtPiece {
  data: ArtData,
  isFavorite: boolean
}

function App() {


 
  return (
    <div className="App">
        <ArtCard />
    </div>
  );
}

export default App;
