import React from "react";
import Tracklist from "./Tracklist";

function Playlist({ playlist }) {
  return (
    <div>
      <p>{playlist.name}</p>
      <Tracklist song={playlist.tracks} />
    </div>
  );
}

export default Playlist;
