import { useQuery } from "react-query";
import { getLyricsForTrack } from "../api/getLyricsForTrack";

export const useLyrics = (artistName, track) => {
  const { data: lyrics, isLoading, error } = useQuery(
    "lyrics",
    () => getLyricsForTrack(artistName, track),
    { cacheTime: 0, retry: false, refetchOnWindowFocus: false }
  );

  return {
    lyrics,
    isLoading,
    error,
  };
};
