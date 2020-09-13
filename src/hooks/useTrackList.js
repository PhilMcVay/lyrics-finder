import { useQuery } from "react-query";
import getTrackListForArtist from "../api/getTrackListForArtist";

export const useTrackList = (artistName, limit = 100, offset = 0) => {
  const { data, isLoading, error } = useQuery("trackList", () =>
    getTrackListForArtist({
      artistName,
      limit,
      offset,
    })
  );

  return {
    artistName,
    isLoading,
    error,
    trackList: data?.works
      .filter(({ type }) => type === "Song")
      .map(({ title }) => title),
  };
};
