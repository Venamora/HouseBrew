import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const requestGetKopi = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/kopi`, {
      params: query,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
