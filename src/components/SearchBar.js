import React, { useEffect, useState } from "react";
import SearchResults from "./SearchResults";

function SearchBar({
  accessToken,
  searchedTracks,
  setSearchedTracks,
  playlist,
  setPlaylist,
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
  };

  const [search, setSearch] = useState("Search songs...");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (accessToken !== "" && search !== "") {
      try {
        console.log(accessToken);
        const params = {
          method: "GET",
          headers: { Authorization: `Bearer ${accessToken}` },
        };
        fetch(
          `https://api.spotify.com/v1/search?q=${search}&type=track&limit=5`,
          params
        )
          .then((result) => result.json())
          .then((data) => {
            setSearchedTracks(data.tracks.items);
            console.log(data.tracks.items[0].album.name);
          });
      } catch (e) {
        console.log(e);
      }
    }
  }, [search]);

  return (
    <div>
      <input value={search} onChange={handleSearch} />
      <SearchResults
        tracks={searchedTracks}
        addSelectedSong={addSelectedSong}
      />
    </div>
  );
}

export default SearchBar;
