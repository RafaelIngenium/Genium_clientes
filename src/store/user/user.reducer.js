import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  user: null,
  loading: false,
  error: {}
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.USER_LOGIN_START:
      return {
        ...state,
        loading: true
      };
    case UserActionTypes.USER_LOGIN:
    case UserActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: { ...action.payload },
        loading: false,
        error: {}
      };
    case UserActionTypes.USER_LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
        error: { msg: "Usuario não encontrado. Verifique login e senha" }
      };
    case UserActionTypes.GET_USER_INFO:
      return {
        ...state,
        user: { ...state.user, info: action.payload }
      };
    case UserActionTypes.USER_LOGOUT:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};

export default userReducer;
