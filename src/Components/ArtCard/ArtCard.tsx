import React, { useState } from "react";
import "./ArtCard.css";
import FaveButton from "../FaveButton/FaveButton";
import { ArtData } from "../../utils";
import frame  from '../../images/frame.png'

interface Props {
  setSavedPieces: (piece: ArtData) => void;
  piece: ArtData;
}

const ArtCard = ({ setSavedPieces, piece }: Props) => {

  const [isFavorited, setisFavorited] = useState(false);

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
          {!piece.objectDate && <p className="date">Date Unknown</p> || <p className="date">{piece.objectDate}</p>}
        </div>
        <div className="fave-container">
          <FaveButton
            piece={piece}
            setSavedPieces={setSavedPieces}
            isFavorited={isFavorited}
            setisFavorited={setisFavorited}
          />
        </div>
      </div>
    </div>
  );
};

export default ArtCard;
