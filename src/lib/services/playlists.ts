import axios from "axios";

const BASE_URL = "/api/playlists";

const getDiscover = async () => {
  const { data } = await axios.get(`${BASE_URL}/discover`);
  return data;
};

const getNewReleases = async () => {
  const { data } = await axios.get(`${BASE_URL}/newReleases`);
  return data;
};

const Playlists = { getDiscover, getNewReleases };

export default Playlists;
