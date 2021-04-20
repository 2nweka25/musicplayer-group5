import axios from "axios";

const getProfile = async (id: string | string[]) => {
  const { data } = await axios.get(`/api/user/${id}`);
  return data;
};


const User = { getProfile };

export default User;
