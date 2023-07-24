import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import { generateID, cleanUpData, ArtData } from "../../utils";
import SavedPage from "../SavedPage/SavedPage";
import NavBar from "../NavBar/NavBar";
import { getArt, getIDs } from "../../apiCalls";


function App() {
  const [pieces, setPieces] = useState<ArtData[]>([]);
  const [savePieces, setSavePieces] = useState<ArtData[]>([]);

  useEffect(() => {
    const callApi = async () => {
      const ids = await getIDs()
      ids.forEach(id => 
      getArt(id).then((data) => {
        if (data.primaryImage && data.message !== "ObjectID not found") {
          const cleanData: any = cleanUpData(data);
          // console.log("DATA WITH IMAGE", cleanData);
          setPieces((prev) => [...prev, cleanData]);
          return cleanData;
        } else if (
          !data.primaryImage ||
          data.message === "ObjectID not found"
        ) {
          callApi();
        }
      })
      )
    };
    // console.log("pieces", pieces);
    if (pieces.length < 3) {
      callApi();
    } else if (pieces.length === 4) {
      pieces.pop();
    }
  }, [pieces]);

  const setSavedPieces = (piece: ArtData) => {
    const isAlreadyFavorited = savePieces.some(
      (pie) => pie.objectID === piece.objectID
    );
    if (!isAlreadyFavorited) {
      setSavePieces((prev) => [...prev, piece]);
    } else {
      setSavePieces((prev) => {
        const i = savePieces.indexOf(piece);
        const copy = [...prev];
        copy.splice(i, 1);
        return copy;
          
      })
    }
  };

  return (
    <div className="App">
      <NavBar setPieces={setPieces} />
      <Routes>
        <Route
          path="/"
          element={<Homepage pieces={pieces} setSavedPieces={setSavedPieces} />}
        />
        <Route
          path="/saved"
          element={
            <SavedPage
              setSavedPieces={setSavedPieces}
              savePieces={savePieces}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
