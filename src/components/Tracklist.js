import React from "react";
import Track from "./Track";
import "./../styles/Tracklist.css";

function Tracklist({ song, removeSong }) {
  return (
    <div className="tracklist">
      {song.map((item) => (
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
              removeSong(item.name);
            }}
            style={{ height: 20, width: 80 }}
          >
            REMOVE
          </button>
        </div>
      ))}
    </div>
  );
}

export default Tracklist;
