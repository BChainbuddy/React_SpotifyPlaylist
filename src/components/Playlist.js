import React, { useState } from "react";
import Tracklist from "./Tracklist";

function Playlist({ playlist, setPlaylist }) {
  const removeTrack = (e) => {
    setPlaylist((prev) => {
      return {
        ...prev,
        tracks: prev.tracks.filter((item) => item.name !== e),
      };
    });
  };

  const renamePlaylist = (e) => {
    e.preventDefault();
    setPlaylist((prev) => {
      return {
        ...prev,
        name: e.target.value,
      };
    });
  };

  return (
    <div>
      <input
        value={playlist.name}
        type="text"
        id="playlistname"
        onChange={renamePlaylist}
      ></input>
      <Tracklist song={playlist.tracks} removeSong={removeTrack} />
    </div>
  );
}

export default Playlist;
