import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export async function requestLogin(username, password) {
  const response = await axios.post(
    `${BASE_URL}/login`,
    {
      name: username,
      password,
    },
    { withCredentials: true }
  );
  return response.data;
}

export async function requestPostUser(username, password) {
  const response = await axios.post(
    `${BASE_URL}/user`,
    {
      name: username,
      password,
    },
    { withCredentials: true }
  );
  return response.data;
}
