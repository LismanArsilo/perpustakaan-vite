import axios from "axios";
import config from "../config/config";
import Cookies from "cookie-universal";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const response = await axios.post(
      `${config.url}/auth/login`,
      userCredential
    );
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });
  }
};

// const authLogout = async (payload) => {
//   const cookies = Cookies();
//   try {
//     const userLogout = await axios.post(`${config.url}/auth/logout`, null, {
//       headers: {
//         Authorization: `Bearer ${payload}`,
//       },
//     });
//     cookies.remove("Authorization");
//     return userLogout.data;
//   } catch (error) {
//     return error.message;
//   }
// };
