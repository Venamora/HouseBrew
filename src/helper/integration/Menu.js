import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const requestGetKopi = async (
  filterQuery = {},
  sortQuery = { sortBy: "nama", order: "asc" }
) => {
  try {
    const response = await axios.get(`${BASE_URL}/kopi`, {
      params: { ...filterQuery, ...sortQuery },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
