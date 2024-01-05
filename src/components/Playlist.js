import React, { useEffect, useState } from "react";
import Tracklist from "./Tracklist";

function Playlist({ playlist, setPlaylist, accessToken }) {
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

  const savePlaylist = async () => {
    // Get user Id
    console.log(accessToken);
    const settings = {
      headers: { Authorization: "Bearer " + accessToken },
    };
    const response = await fetch("https://api.spotify.com/v1/me", settings);
    const data = await response.json();
    const userId = data.id;
    console.log(userId);

    // Create a playlist
    console.log(playlist.name);

    const attributes = {
      name: playlist.name,
      description: "New playlist",
      public: false,
    };

    const jsonAttributes = JSON.stringify(attributes);
    console.log(jsonAttributes);
    const settings2 = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attributes),
    };

    const response2 = await fetch(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      settings2
    );
    console.log(settings2);
    const data2 = await response2.json();
    console.log(data2);
    const playlistId = data2.id;
    console.log(playlistId);

    // Add tracks to playlist
    console.log(playlist.tracks[0].uri);
    let uriList = [];
    for (let i = 0; i < playlist.tracks.length; i++) {
      uriList.push(playlist.tracks[i].uri);
      console.log(playlist.tracks[i].uri);
    }
    const attributes2 = { uris: uriList, position: 0 };
    const settings3 = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attributes2),
    };

    const response3 = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      settings3
    );
    const data3 = await response3.json();
    console.log(data3);
  };

  //   useEffect(() => {
  //     if (accessToken) {
  //       savePlaylist();
  //     }
  //   }, [accessToken]);

  return (
    <div>
      <input
        value={playlist.name}
        type="text"
        id="playlistname"
        onChange={renamePlaylist}
      ></input>
      <Tracklist song={playlist.tracks} removeSong={removeTrack} />
      <button onClick={savePlaylist}>Save to Spotify</button>
    </div>
  );
}

export default Playlist;
