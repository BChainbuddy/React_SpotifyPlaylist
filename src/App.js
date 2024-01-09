import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SelectedSong from "./components/SelectedSong";
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

  const [currentTrack, setCurrentTrack] = useState("");

  const [accessToken, setAccessToken] = useState("");

  function generateRandomString(length) {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  const client_id = "3b9eb57c77fa41929262cfd56c7dfe85"; // Your client id
  const redirect_uri = "http://localhost:3000"; // Your redirect uri
  const state = generateRandomString(16);

  useEffect(() => {
    const getTokenFromUrl = () => {
      return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
          let parts = item.split("=");
          initial[parts[0]] = decodeURIComponent(parts[1]);
          return initial;
        }, {});
    };

    const token = getTokenFromUrl().access_token;
    // console.log(getTokenFromUrl());

    if (token) {
      console.log("a happens");
      setAccessToken(token);
      // const expiryDate = new Date().getTime() + 3600;
      localStorage.setItem("access_token", token);
      // localStorage.setItem("expiry_date", expiryDate);
    } else {
      console.log("b happens");
      // const storedToken = localStorage.getItem("access_token");
      // console.log(storedToken);
      // if (storedToken) {
      //   console.log("ba happens");
      //   setAccessToken(storedToken);
      // } else if (accessToken === "") {
      console.log("bb happens");
      var scope =
        "user-read-private user-read-email user-library-modify user-library-read ugc-image-upload user-read-playback-state user-read-currently-playing playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public";
      var url = "https://accounts.spotify.com/authorize";
      url += "?response_type=token";
      url += "&client_id=" + encodeURIComponent(client_id);
      url += "&scope=" + encodeURIComponent(scope);
      url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
      url += "&state=" + encodeURIComponent(state);

      window.location = url; // Redirect user for authorization
      // }
    }
  }, [accessToken]);

  // function removeToken() {
  //   localStorage.removeItem("access_token");
  // }

  return (
    <div className="App">
      <header className="header">
        <p style={{ paddingBottom: 20, paddingTop: 20 }}>JAMMING</p>
      </header>
      <main>
        <SearchBar
          accessToken={accessToken}
          setSearchedTracks={setSearchedTracks}
          searchedTracks={searchedTracks}
          playlist={playlist}
          setPlaylist={setPlaylist}
          setCurrentTrack={setCurrentTrack}
        />
        <SelectedSong currentTrack={currentTrack} />
        <Playlist
          playlist={playlist}
          setPlaylist={setPlaylist}
          accessToken={accessToken}
        ></Playlist>
      </main>
    </div>
  );
}

{
  /* <button onClick={removeToken}>LOGOUT</button> */
}

export default App;
