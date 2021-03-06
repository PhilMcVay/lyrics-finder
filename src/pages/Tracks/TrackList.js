import React, { useState } from "react";

import Track from "./Track";
import SearchFilter from "./SearchFilter";
import { TrackListContainer } from "./TrackList.styles";

const TrackList = ({ trackList = [], artistName }) => {
  const [searchFilter, setSearchFilter] = useState("");

  const handeSearchFilter = ({ target: { value } }) => setSearchFilter(value);

  return (
    <>
      {trackList.length > 0 && (
        <SearchFilter
          placeholder="Filter Tracks..."
          value={searchFilter}
          onChange={handeSearchFilter}
        />
      )}
      <TrackListContainer data-testid="tracks-list">
        {trackList
          .filter((track) =>
            track.toLowerCase().includes(searchFilter.toLowerCase().trim())
          )
          .sort()
          .map((track, index) => (
            <Track
              key={`${track}-${index}`}
              track={track}
              artistName={artistName}
            />
          ))}
      </TrackListContainer>
    </>
  );
};

export default TrackList;
