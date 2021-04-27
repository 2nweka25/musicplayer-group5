import axios from "axios";

const BASE_URL = "http://localhost:3000/api/playlists";

const getAll = async () => {
  const { data } = await axios.get(`${BASE_URL}`);
  return data;
};

const Playlists = { getAll };

export default Playlists;
