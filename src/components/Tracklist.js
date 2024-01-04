import React from "react";
import Track from "./Track";

function Tracklist({ song, removeSong }) {
  return song.map((item) => (
    <div key={item.id}>
      <Track name={item.name} artist={item.artists} album={item.album.name} />
      <button
        onClick={() => {
          removeSong(item.name);
        }}
      >
        REMOVE
      </button>
    </div>
  ));
}

export default Tracklist;
