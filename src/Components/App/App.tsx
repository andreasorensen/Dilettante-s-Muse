import './App.css';
import NavBar from '../NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import SavedPage from '../SavedPage/SavedPage';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/saved" element={<SavedPage />} />
      </Routes>
    </>
  );
};




export default App;
