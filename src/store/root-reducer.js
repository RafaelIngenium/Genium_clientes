import { combineReducers } from "redux";
//Reducers
import userReducer from "./user/user.reducer";
import modalReducer from "./modal/modal.reducer";
import loginReducer from "./login/login.reducer";
import environmentReducer from "./environment/environment.reducer";

const rootReducer = combineReducers({ userReducer, modalReducer, loginReducer,environmentReducer });

export default rootReducer;
