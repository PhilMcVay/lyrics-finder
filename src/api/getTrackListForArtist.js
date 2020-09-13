import axios from "axios";

const API_URL = "https://musicbrainz.org/ws/2";

export default async ({ artistName, limit, offset }) => {
  const {
    data: { artists },
  } = await axios.get(
    `${API_URL}/artist?query=${encodeURI(artistName)}&fmt=json`
  );

  const { data } = await axios.get(
    `${API_URL}/work?artist=${artists[0].id}&limit=${limit}&offsett=${offset}&fmt=json`
  );

  return data;
};
