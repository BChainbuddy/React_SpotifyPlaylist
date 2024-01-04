import React from "react";
import Track from "./Track";

function SearchResults({ tracks, addSelectedSong }) {
  return tracks.map((item) => (
    <div>
      <Track
        name={item.name}
        artist={item.artists}
        album={item.album.name}
        key={item.id}
      />
      <button
        onClick={() => {
          addSelectedSong(item);
        }}
      >
        ADD
      </button>
    </div>
  ));
}

export default SearchResults;
