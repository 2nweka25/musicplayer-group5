import axios from "axios";

const findById = async (id: string | string[]) => {
  const { data } = await axios.get(`/api/songs/${id}`);
  return data;
};

const Songs = { findById };

export default Songs;
