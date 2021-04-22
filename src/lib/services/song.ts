import axios from "axios";

const findById = async (id: string | string[]) => {
  const { data } = await axios.get(`/api/songs/${id}`);
  return data;
};

const getRandomSong = async () => {
  const { data } = await axios.get(`/api/songs/random`);
  return data;
};

const getComments = async (id: string | string[]) => {
  const { data } = await axios.get(`/api/song/${id}/comments`);
  return data;
};

const setSong = async (songData) => {
  const { data } = await axios.post(`/api/song/upload`, { ...songData });
  return data;
};

const Songs = { findById, getRandomSong, getComments, setSong };

export default Songs;
