import React, { useEffect } from "react";
import "./../styles/Track.css";

function Track({ name, artist, album, image }) {
  return (
    <div className="track">
      <div className="info">
        <p className="item">{name}</p>
        <div className="item">
          {artist.length > 1 ? (
            <p className="item">Artists:</p>
          ) : (
            <p className="item">Artist:</p>
          )}
          {artist && (
            <div>
              {artist.map((item, i) => (
                <p key={i} className="item">
                  {item.name}
                </p>
              ))}
            </div>
          )}
        </div>
        <p className="item">{album}</p>
      </div>
      <img src={image} style={{ width: 100, height: 100 }} />
    </div>
  );
}

export default Track;
