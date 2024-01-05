import React from "react";
import "./../styles/Track.css";

function Track({ name, artist, album }) {
  return (
    <div className="track">
      <p className="item">{name}</p>
      {artist.length > 1 ? <p>Artists:</p> : <p className="item">Artist:</p>}
      {artist && (
        <div>
          {artist.map((item, i) => (
            <p key={i} className="item">
              {item.name}
            </p>
          ))}
        </div>
      )}
      <p className="item">{album}</p>
    </div>
  );
}

export default Track;
