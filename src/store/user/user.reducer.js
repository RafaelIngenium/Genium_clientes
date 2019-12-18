import UserActionTypes from "./user.types";

const INITIAL_STATE = [];

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.TEST_TYPE:
      break;

    default:
      return state;
  }
};

export default userReducer;
