import React from "react";

import { LyricsContainer, Line } from "./Lyrics.style";

const formatLyrics = (lyrics) => {
  const splitLyrics = lyrics.split("\n");

  return splitLyrics.map((line, index) => {
    if (!line.length) return <br />;
    return <Line key={`${line}-${index}`}>{line}</Line>;
  });
};

const Lyrics = ({ lyrics }) => (
  <LyricsContainer>{formatLyrics(lyrics)}</LyricsContainer>
);

export default Lyrics;
