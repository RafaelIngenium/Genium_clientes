import { combineReducers } from "redux";
//Reducers
import userReducer from "./user/user.reducer";
import modalReducer from "./modal/modal.reducer";

const rootReducer = combineReducers({ userReducer, modalReducer });

export default rootReducer;
