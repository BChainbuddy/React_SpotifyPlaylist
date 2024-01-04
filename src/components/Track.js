import React from "react";

function Track({ name, artist, album }) {
  return (
    <div>
      <p>{name}</p>
      {artist.length > 1 ? <p>Artists:</p> : <p>Artist:</p>}
      {artist && (
        <div>
          {artist.map((item, i) => (
            <p key={i}>{item.name}</p>
          ))}
        </div>
      )}
      <p>{album}</p>
    </div>
  );
}

export default Track;
