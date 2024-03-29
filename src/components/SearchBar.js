import React, { useEffect, useState } from "react";
import SearchResults from "./SearchResults";
import "./../styles/SearchBar.css";

function SearchBar({
  accessToken,
  searchedTracks,
  setSearchedTracks,
  playlist,
  setPlaylist,
  setCurrentTrack,
}) {
  const addSelectedSong = (song) => {
    if (!playlist.tracks.includes(song)) {
      setPlaylist((prev) => {
        return {
          ...prev,
          tracks: [...prev.tracks, song],
        };
      });
    }
    setCurrentTrack(song);
  };

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (accessToken !== "" && search !== "") {
      try {
        // console.log(accessToken);
        const params = {
          method: "GET",
          headers: { Authorization: `Bearer ${accessToken}` },
        };
        fetch(
          `https://api.spotify.com/v1/search?q=${search}&type=track&limit=50`,
          params
        )
          .then((result) => result.json())
          .then((data) => {
            if (data.tracks) {
              setSearchedTracks(data.tracks.items);
              console.log(data.tracks.items[0].preview_url);
              console.log(data.tracks.items[0].album.name);
              console.log(data.tracks.items[0].album.images[0].url);
            } else {
              console.log("No items for this search");
            }
          });
      } catch (e) {
        console.log(e);
      }
    }
  }, [search]);

  return (
    <div className="containerSearch">
      <input
        value={search}
        onChange={handleSearch}
        className="searchBar"
        placeholder="Search for songs..."
      />
      <SearchResults
        tracks={searchedTracks}
        addSelectedSong={addSelectedSong}
      />
    </div>
  );
}

export default SearchBar;
