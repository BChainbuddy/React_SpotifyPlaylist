import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import Tracklist from "./components/Tracklist";
import logo from "./logo.svg";
import "./styles/App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [searchedTracks, setSearchedTracks] = useState([]);

  const [playlist, setPlaylist] = useState({
    name: "myPlaylist",
    tracks: [],
  });
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    try {
      const authParams = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body:
          "grant_type=client_credentials&client_id=" +
          "3b9eb57c77fa41929262cfd56c7dfe85" +
          "&client_secret=" +
          "99fc2386b3d14a3580c0f289ce7ddee2",
      };

      fetch("https://accounts.spotify.com/api/token", authParams)
        .then((result) => result.json())
        .then((data) => setAccessToken(data.access_token));
    } catch (error) {
      console.error("Error retrieving access token:", error);
    }
  }, []);

  return (
    <div className="App">
      <header>
        <p>JAMMING</p>
      </header>
      <SearchBar
        accessToken={accessToken}
        setSearchedTracks={setSearchedTracks}
        searchedTracks={searchedTracks}
        playlist={playlist}
        setPlaylist={setPlaylist}
      />
      <Playlist
        playlist={playlist}
        setPlaylist={setPlaylist}
        accessToken={accessToken}
      ></Playlist>
    </div>
  );
}

export default App;
