import React from "react";
import { ArtData } from "../../utils";
import ArtCard from "../ArtCard/ArtCard";

interface Props {
  savePieces: ArtData[];
  setPieces: (value: React.SetStateAction<ArtData[]>) => void;
  setSavedPieces: (id: number | string) => void;
}
const SavedPage: React.FC<Props> = ({
  savePieces,
  setPieces,
  setSavedPieces,
}) => {
  const renderSavedPieces = () => {
    return savePieces.map((piece) => {
      return (
        <ArtCard
          key={piece.objectID}
          piece={piece}
          setPieces={setPieces}
          setSavedPieces={setSavedPieces}
          pieces={savePieces}
        />
      );
    });
  };

  return (
    <div>
      {!savePieces.length ? <h1>There are no saved pieces</h1> : renderSavedPieces()}
    </div>
  );
};

export default SavedPage;
