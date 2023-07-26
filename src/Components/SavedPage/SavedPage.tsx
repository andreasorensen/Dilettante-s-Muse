import React from "react";
import { ArtData } from "../../utils";
import ArtCard from "../ArtCard/ArtCard";
import './SavedPage.css';
import bottomLogo from '../../images/bottomlogo.png';

interface Props {
  savePieces: ArtData[];
  setSavedPieces: (piece: ArtData) => void;
}
const SavedPage: React.FC<Props> = ({ savePieces, setSavedPieces }) => {
  const renderSavedPieces = () => {
    return savePieces.map((piece) => {
      return (
        <ArtCard
          key={piece.objectID}
          piece={piece}
          setSavedPieces={setSavedPieces}
        />
      );
    });
  };

  return (
    <div className="saved-container">
      <div className="saved-header-container">
        <h1 className="saved-header">My Favorite Pieces</h1>
      </div>
      <div className="saved-pieces">
      {!savePieces.length ? (
        <h1 className="saved-text">There are no saved pieces</h1>
      ) : (
        renderSavedPieces()
      )}
      </div>
    </div>
  );
};

export default SavedPage;
