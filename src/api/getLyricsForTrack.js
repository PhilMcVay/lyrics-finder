import axios from "axios";

const API_URL = "https://api.lyrics.ovh/v1";

export const getLyricsForTrack = async (artistName, track) => {
  const {
    data: { lyrics },
  } = await axios.get(`${API_URL}/${artistName}/${track}`);

  return lyrics;
};
