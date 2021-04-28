import axios from "axios";

const findById = async (id: string | string[]) => {
  const { data } = await axios.get(`/api/song/${id}`);
  return data;
};

const postComment = async (id: string, comment: Comment) => {
  const { data } = await axios.post(`/api/song/${id}/comment`, comment);
  return data;
};

const getRandomSong = async () => {
  const { data } = await axios.get(`/api/song/random`);
  return data;
};

const getAudioUrl = async (id: string | string[]) => {
  const { data } = await axios.get(`/api/song/${id}/download`);
  return data;
};

const setSong = async (songData: any) => {
  const { data } = await axios.post(`/api/song/upload`, { ...songData });
  return data;
};

const Songs = { findById, getRandomSong, setSong, getAudioUrl, postComment };

export default Songs;
