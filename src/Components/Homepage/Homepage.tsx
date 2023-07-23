import React from "react";
import { ArtData } from "../../utils";
import ArtCard from "../ArtCard/ArtCard";

interface Props {
  pieces: ArtData[];
  setPieces: (value: React.SetStateAction<ArtData[]>) => void;
  setSavedPieces: (id: number | string) => void;
}

const Homepage = ({ pieces, setPieces, setSavedPieces }: Props) => {
  const renderPieces = () => {
    const allPieces = pieces.map((piece) => (
      <ArtCard
        key={piece.objectID}
        piece={piece}
        setPieces={setPieces}
        setSavedPieces={setSavedPieces}
        pieces={pieces}
      />
    ));
    return allPieces.slice(0, 3);
  };

  return (
    <div className="art-cards-container">
      {/* Homepage */}
      {renderPieces()}
      {pieces.length < 3 && (
        <p>Error loading pieces, please refresh the page!</p>
      )}
    </div>
  );
};

export default Homepage;
