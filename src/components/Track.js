import React, { useEffect } from "react";
import "./../styles/Track.css";

function Track({ name, artist, album, image }) {
  return (
    <div className="track">
      <div className="info">
        <p className="item">Name: {name}</p>
        <div className="item">
          {artist.length > 1 ? (
            <p className="item">
              Artists:
              {artist && (
                <span style={{ display: "inline" }} className="item">
                  {artist.map((item, i) => (
                    <span key={i} style={{ display: "inline" }}>
                      {item.name}
                      {i !== artist.length - 1 ? (
                        <span>, </span>
                      ) : (
                        <span></span>
                      )}
                    </span>
                  ))}
                </span>
              )}
            </p>
          ) : (
            <p className="item">Artist: {artist[0].name}</p>
          )}
        </div>
        <p className="item">Album: {album}</p>
      </div>
      <img src={image} style={{ width: 100, height: 100 }} />
    </div>
  );
}

export default Track;
