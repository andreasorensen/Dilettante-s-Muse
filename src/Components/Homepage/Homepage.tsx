import React from "react";
import { ArtData } from "../../utils";
import ArtCard from "../ArtCard/ArtCard";
import './Homepage.css'

interface Props {
  pieces: ArtData[];
  setSavedPieces: (piece: ArtData) => void;
}

const Homepage = ({ pieces, setSavedPieces }: Props) => {
  const renderPieces = () => {
    const allPieces = pieces.map((piece) => (
      <ArtCard
        key={piece.objectID}
        piece={piece}
        setSavedPieces={setSavedPieces}
      />
    ));
    return allPieces.slice(0, 3);
  };

  return (
  <div className='art-cards-wrapper'>
    <div className="art-cards-container">
      {renderPieces()}
      {pieces.length < 3 && <p className="loading-text">Loading...</p>}
    </div>
  </div>
  );
};

export default Homepage;
