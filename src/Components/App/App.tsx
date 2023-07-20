import './App.css';
import cleanUpData from "../../utils"
import artData from "../../mockData"

function App() {

  const cleanedData = cleanUpData(artData);

  return (
    <div className="App">
      <p>{JSON.stringify(cleanedData)}</p>
        
    </div>
  );
}

export default App;
