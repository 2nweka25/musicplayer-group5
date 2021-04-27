import axios from "axios";

const getProfile = async (id: string | string[]) => {
  const { data } = await axios.get(`/api/user/${id}`);
  return data;
};

const getFavouriteSongs = async (userId: string) => {
  const { data } = await axios.get<Songs>(`/api/user/${userId}/favourites`);
  return data;
};

const addToFavouriteSongs = async (song: Song, userId: string) => {
  await axios.post(`/api/user/${userId}/favourites`, song);
};

const User = { getProfile, getFavouriteSongs, addToFavouriteSongs };

export default User;
