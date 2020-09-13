import React from "react";
import { useTrackList } from "../../hooks/useTrackList";

import Card from "../../shared/Card";
import { Container, ArtistName } from "../../shared/styles/";

import TrackList from "./TrackList";

const TracksPage = () => {
  const { artistName, trackList, isLoading, error } = useTrackList(
    "The Police"
  );

  return (
    <Card>
      <Container data-testid="tracks-page">
        <ArtistName>{artistName}</ArtistName>
        {isLoading && <p>Loading Tracks...</p>}
        {error && <p>Error!</p>}
        <TrackList trackList={trackList} artistName={artistName} />
      </Container>
    </Card>
  );
};

export default TracksPage;
