import React, { useState } from "react";
import "./ArtCard.css";
import FaveButton from "../FaveButton/FaveButton";
import { ArtData } from "../../utils";
import frame from "../../images/frame.png";

interface Props {
  pieces: ArtData[];
  setPieces: (value: React.SetStateAction<ArtData[]>) => void;
  setSavedPieces: (id: number | string) => void;
  piece: ArtData;
}

const ArtCard: React.FC<Props> = ({
  pieces,
  setPieces,
  setSavedPieces,
  piece,
}: Props) => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="art-card">
      <div className="frame-container">
        <img className="frame-image" src={frame} alt="frame" />
        <div className="image-container">
          <img className="image" src={piece.primaryImage} alt={piece.title} />
        </div>
      </div>
      <div className="details-container">
        <div className="details">
          <p className="title">{piece.title}</p>
          <p className="artist">{piece.artistDisplayName}</p>
          <p className="date">{piece.objectDate}</p>
        </div>
        <div className="fave-container">
          <FaveButton
            piece={piece}
            setSavedPieces={setSavedPieces}
            setPieces={setPieces}
            artPiece={isFavorited}
            pieces={pieces}
            setArtPiece={setIsFavorited}
          />
        </div>
      </div>
    </div>
  );
};

// add <> to return, then add the image below & and allow the entire art card to be behind it, by putting

export default ArtCard;
