import LoginActionTypes from "./login.types";

export default function user(state = [], action) {
    switch (action.type) {
      case LoginActionTypes.ADD_INFO_USER:
        return action.username;
      default:
        return state;
    }
  }
  