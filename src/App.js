import Playlist from "./components/Playlist";
import Tracklist from "./components/Tracklist";
import logo from "./logo.svg";
import "./styles/App.css";
import React, { useState } from "react";

const songs = [
  { name: "I like it like that", artist: "Cardi B", album: "IDK", id: "5" },
  { name: "Baby", artist: "Justin Bieber", album: "IDKK", id: "5" },
];

function App() {
  const [songlist, setSongList] = useState([]);

  return (
    <div className="App">
      <header>
        <p>JAMMING</p>
      </header>
      <Playlist playlist={{ name: "myPlaylist", tracks: songs }}></Playlist>
      {/* <Tracklist song={songs} /> */}
    </div>
  );
}

export default App;
