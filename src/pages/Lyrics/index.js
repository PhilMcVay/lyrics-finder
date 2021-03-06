import React from "react";
import { useParams } from "react-router-dom";
import { useLyrics } from "../../hooks/useLyrics";

import Card from "../../shared/Card";
import { Container, ArtistName, BackLink } from "../../shared/styles";

import Lyrics from "./Lyrics";

const LyricsPage = () => {
  const { artistName, track } = useParams();
  const { lyrics, isLoading, error } = useLyrics(artistName, track);

  const noLyrics = lyrics === ""

  return (
    <Card>
      <Container data-testid="lyrics-page">
        <BackLink to="/">Back to Track List</BackLink>
        <ArtistName>
          {artistName} - {track}
        </ArtistName>
        {isLoading && <p>Loading Lyrics...</p>}
        {(error || noLyrics) && <p>No lyrics found for {track}</p>}
        {lyrics && <Lyrics data-testid="lyrics" lyrics={lyrics} />}
      </Container>
    </Card>
  );
};

export default LyricsPage;
