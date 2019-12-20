import UserActionTypes from "./user.types";
import api from "../../utils/api";

export const userLogin = () => ({
  type: UserActionTypes.USER_LOGIN
  // payload: u
});

export const userLoginStart = () => ({
  type: UserActionTypes.USER_LOGIN_START
});

export const userLoginSuccess = id => ({
  type: UserActionTypes.USER_LOGIN_SUCCESS,
  payload: id
});

export const userLoginFailure = () => ({
  type: UserActionTypes.USER_LOGIN_FAILURE
});

export const userLoginAsync = (username, password) => {
  return async dispatch => {
    dispatch(userLoginStart());
    try {
      const response = await api.get(
        `login?username=${username}&password=${password}`
      );
      const { id } = response.data;
      if (id === "" || typeof id === "undefined") {
        dispatch(userLoginFailure());
      } else {
        const user = await api.get(`/getinfouser?id=${id}`);
        dispatch(userLoginSuccess(user.data));
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const userLogout = user => ({
  type: UserActionTypes.USER_LOGOUT,
  payload: user
});
