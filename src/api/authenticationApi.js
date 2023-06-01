import axios from "axios";
import config from "../config/config";
import Cookies from "cookie-universal";

const authLogin = async (payload) => {
  const cookies = Cookies();
  try {
    const response = await axios.post(`${config.url}/auth/login`, payload);
    cookies.set("Authorization", response.data.data[0].token);
    return response.data.data;
  } catch (error) {
    return error;
  }
};

const authLogout = async (payload) => {
  const cookies = Cookies();
  try {
    const userLogout = await axios.post(`${config.url}/auth/logout`, null, {
      headers: {
        Authorization: `Bearer ${payload}`,
      },
    });
    cookies.remove("Authorization");
    return userLogout.data;
  } catch (error) {
    console.info(error);
    return error.message;
  }
};

export default {
  authLogin,
  authLogout,
};
