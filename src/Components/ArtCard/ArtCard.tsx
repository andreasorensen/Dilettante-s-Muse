import React, { useState } from "react";
import "./ArtCard.css";
import FaveButton from "../FaveButton/FaveButton";
import { ArtData } from "../../utils";

interface Props {
  setSavedPieces: (piece: ArtData) => void;
  piece: ArtData;
}

const ArtCard = ({ setSavedPieces, piece }: Props) => {
  const [isFavorited, setisFavorited] = useState(false);

  return (
    <div className="art-card">
      <p>{piece.title}</p>
      <FaveButton
        piece={piece}
        setSavedPieces={setSavedPieces}
        isFavorited={isFavorited}
        setisFavorited={setisFavorited}
      />
    </div>
  );
};

export default ArtCard;
