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

const Songs = { findById, getRandomSong, getComments };

export default Songs;
