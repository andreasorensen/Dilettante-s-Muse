import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import { cleanUpData, ArtData, getRandomIds } from "../../utils";
import SavedPage from "../SavedPage/SavedPage";
import NavBar from "../NavBar/NavBar";
import { getArt, getIDs } from "../../apiCalls";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

interface Ids {
  total: number;
  objectIDs: number[];
}

function App() {
  const [pieces, setPieces] = useState<ArtData[]>([]);
  const [savePieces, setSavePieces] = useState<ArtData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const callApi = async () => {
    try {
      const ids: Ids = await getIDs();
      console.log("ids:", ids);
      const randomPieces: number[] = getRandomIds(ids);
      console.log("randomPieces", randomPieces);
      for (const id of randomPieces) {
        const data = await getArt(id);
        if (data.primaryImage && data.message !== "ObjectID not found") {
          const cleanData: any = cleanUpData(data);
          setPieces((prev) => [...prev, cleanData]);
        }
      }
    } catch (error: unknown) {
      if (error instanceof Error && error.message.includes("Server error")) {
        setError(
          "Sorry, we encountered a server error. Please try again later."
        );
      }
      console.log(error);
    }
  };

  useEffect(() => {
    if (pieces.length < 3) {
      callApi();
    } else if (pieces.length === 4) {
      setPieces((prev => prev.slice(0, prev.length - 1)))
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
      });
    }
  };

  return (
    <div className="App">
      <NavBar setPieces={setPieces} />
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <Homepage pieces={pieces} setSavedPieces={setSavedPieces} setPieces={setPieces}/>
            }
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
          <Route 
            path="/*" 
            element={<NotFoundPage />} 
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
