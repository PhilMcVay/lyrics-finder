import React from "react";
import { useTrackList } from "../../hooks/useTrackList";

import Card from "../../shared/Card";
import TrackList from "./TrackList";

import { Container, ArtistName } from "./index.styles";

const TracksPage = () => {
  const { artistName, trackList, isLoading, error } = useTrackList(
    "The Police"
  );

  return (
    <Card>
      <Container>
        <ArtistName>{artistName}</ArtistName>
        {isLoading && <p>Loading Tracks...</p>}
        {error && <p>Error!</p>}
        <TrackList trackList={trackList} artistName={artistName} />
      </Container>
    </Card>
  );
};

export default TracksPage;
