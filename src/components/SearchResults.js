import React from "react";
import Track from "./Track";
import "./../styles/SearchResults.css";

function SearchResults({ tracks, addSelectedSong }) {
  return (
    <div className="searchresults">
      {tracks.map((item) => (
        <div
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
          />
          <button
            onClick={() => {
              addSelectedSong(item);
            }}
          >
            ADD
          </button>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
