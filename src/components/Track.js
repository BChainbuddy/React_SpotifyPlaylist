import React from "react";

function Track({ name, artist, album }) {
  return (
    <div>
      <p>{name}</p>
      <p>{artist}</p>
      <p>{album}</p>
    </div>
  );
}

export default Track;
