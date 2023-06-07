import axios from "axios";
import config from "../config/config";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const response = await axios.post(
      `${config.url}/auth/login`,
      userCredential
    );
    localStorage.setItem(
      "Authorization",
      JSON.stringify(response.data.data.token)
    );
    localStorage.setItem("User", JSON.stringify(response.data.data));
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });
  }
};

export const authLogout = async (payload) => {
  try {
    console.info(payload);
    const userLogout = await axios.post(`${config.url}/auth/logout`, null, {
      headers: {
        Authorization: `Bearer ${payload}`,
      },
    });
    localStorage.removeItem("Authorization");
    localStorage.removeItem("User");
    return userLogout.data;
  } catch (error) {
    return error;
  }
};
