import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import { generateID, cleanUpData, ArtData} from "../../utils";
import SavedPage from '../SavedPage/SavedPage';
import NavBar from '../NavBar/NavBar';

function App() {
  const [pieces, setPieces] = useState<ArtData[]>([]);
  const [savePieces, setSavePieces] = useState<ArtData[]>([]);
  const [clicked, setClicked] = useState<boolean>(false)

  useEffect(() => {
    console.log("clicked", clicked)
  }, [clicked])

  const getArt = (objectID: number) => {
    console.log(" obj ID", objectID);
    return fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
    ).then((res) => res.json());
  };
  useEffect(() => {
    const callApi = () => {
      getArt(generateID()).then((data) => {
        if (data.primaryImage && data.message !== "ObjectID not found") {
          const cleanData: any = cleanUpData(data);
          console.log("DATA WITH IMAGE", cleanData);
          setPieces((prev) => [...prev, cleanData]);
          return cleanData;
        } else if (
          !data.primaryImage ||
          data.message === "ObjectID not found"
        ) {
          callApi();
        }
      });
    };
    console.log("pieces", pieces);
    if (pieces.length < 3) {
      callApi();
    } else if (pieces.length === 4) {
      pieces.pop();
    }
  }, [pieces]);

  const setSavedPieces = (id: number | string) => {
    const foundPiece = pieces.find((piece) => piece.objectID === id);
    const isAlreadyFavorited = savePieces.some(
      (piece) => piece.objectID === id
    );

    if (foundPiece) {
      if (!isAlreadyFavorited) {
        setSavePieces((prev) => [...prev, foundPiece]);
      } else {
        setSavePieces((prev) => {
          const i = savePieces.indexOf(foundPiece);
          const copy = [...prev]
          //we were trying to mutate the current state inititally
          // to get aroun we just create a copy of the current state
          //so we can muate teh copy an then returning the copy to set to the 
          //new state
          console.log("copy before splice", copy)
          copy.splice(i,1);
          console.log("copy", copy)
          return copy
        });
      }
    }
  };

  useEffect(() => {
    console.log("saved", savePieces);
  }, [savePieces]);

  return (
    <div className="App">
      <NavBar setPieces={setPieces} />
      <Routes> 
      <Route path="/" element={<Homepage
        pieces={pieces}
        setPieces={setPieces}
        setSavedPieces={setSavedPieces}
        />} /> 
        <Route path="/saved" element={<SavedPage setPieces={setPieces} setSavedPieces={setSavedPieces} savePieces={savePieces} />} /> 
       </Routes>
    </div>
  );
};

export default App;
