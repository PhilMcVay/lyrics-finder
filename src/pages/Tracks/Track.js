import React from "react";
import { Link } from "react-router-dom";

import { TrackItem } from "./Track.styles";

const Track = ({ track, artistName }) => (
  <TrackItem>
    <Link to={`${artistName}/${track}`}>{track}</Link>
  </TrackItem>
);

export default Track;
