import React from "react";
import Track from "./Track";
import "./../styles/SearchResults.css";

function SearchResults({ tracks, addSelectedSong }) {
  return (
    <div className="searchresults">
      {tracks.map((item) => (
        <div
          onClick={() => {
            addSelectedSong(item);
          }}
          key={item.id}
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Track
            name={item.name}
            artist={item.artists}
            album={item.album.name}
            image={item.album.images[0].url}
          />
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
