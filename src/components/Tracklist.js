import React from "react";
import Track from "./Track";
import "./../styles/Tracklist.css";

function Tracklist({ song, removeSong }) {
  return (
    <div className="tracklist">
      {song.map((item) => (
        <div
          onClick={() => {
            removeSong(item.name);
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

export default Tracklist;
