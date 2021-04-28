import axios from "axios";

const getAll = async () => {
  const { data } = await axios.get(`/api/playlists`);
  return data;
};

const Playlists = { getAll };

export default Playlists;
