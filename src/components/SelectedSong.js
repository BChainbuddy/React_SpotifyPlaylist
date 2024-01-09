import React, { useCallback, useEffect, useState } from "react";
import "./../styles/SelectedSong.css";

function SelectedSong({ currentTrack }) {
  const [isPlaying, setIsPlaying] = useState(false);

  function togglePlay() {
    const audio = document.getElementById("audioElement");
    if (currentTrack.preview_url) {
      if (audio.paused) {
        console.log("PLAY");
        setIsPlaying(true);
        audio.play();
      } else {
        console.log("PAUSE");
        setIsPlaying(false);
        audio.pause();
      }
    }
  }

  useEffect(() => {
    if (currentTrack.preview_url) {
      const audio = document.getElementById("audioElement");
      audio.pause();
      setIsPlaying(false);
    }
  }, [currentTrack.preview_url]);

  return (
    <div className="selectedsongContainer">
      {currentTrack ? (
        <div className="selectedsong">
          <p className="head">SELECTED SONG</p>
          <div className="audio-player">
            <img
              src={currentTrack.album.images[0].url}
              style={{ height: 180, width: 180 }}
              className="audio-image"
            />
            {currentTrack.preview_url ? (
              <div>
                {isPlaying ? (
                  <svg
                    className="icon"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 12 16"
                    onClick={togglePlay}
                  >
                    <path d="M3 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm7 0H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
                  </svg>
                ) : (
                  <svg
                    className="icon"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                    onClick={togglePlay}
                  >
                    <path d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z" />
                  </svg>
                )}
              </div>
            ) : (
              <div></div>
            )}
            {currentTrack.preview_url ? (
              <audio
                id="audioElement"
                src={currentTrack.preview_url}
                onEnded={() => {
                  setIsPlaying(false);
                }}
              >
                Your browser does not support the audio element.
              </audio>
            ) : (
              <></>
            )}
          </div>
          <p className="head2">NAME</p>
          <p className="songinfo">{currentTrack.name}</p>
          {currentTrack.artists.length > 1 ? (
            <p className="head2">ARTISTS</p>
          ) : (
            <p className="head2">ARTIST</p>
          )}
          <div>
            {currentTrack.artists.length > 1 ? (
              <div>
                {currentTrack && (
                  <span className="songinfo">
                    {currentTrack.artists.map((item, i) => (
                      <span key={i}>
                        {item.name}
                        {i !== currentTrack.artists.length - 1 ? (
                          <span>, </span>
                        ) : (
                          <span></span>
                        )}
                      </span>
                    ))}
                  </span>
                )}
              </div>
            ) : (
              <p className="songinfo">{currentTrack.artists[0].name}</p>
            )}
          </div>
          <p className="head2">ALBUM</p>
          <p className="songinfo">{currentTrack.album.name}</p>
        </div>
      ) : (
        <p className="head" style={{ fontSize: 30 }}>
          No item selected
        </p>
      )}
    </div>
  );
}

export default SelectedSong;

/**
 * name={item.name}
            artist={item.artists}
            album={item.album.name}
            image={item.album.images[0].url}
 */
