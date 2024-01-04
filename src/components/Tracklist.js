import React, { useState } from "react";
import Track from "./Track";

function Tracklist({ song }) {
  const [songs, setSongs] = useState([]);

  return song.map((item) => (
    <Track
      name={item.name}
      artist={item.artist}
      album={item.album}
      key={item.id}
    />
  ));
}

export default Tracklist;
