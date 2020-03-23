import { combineReducers } from "redux";
//Reducers
import userReducer from "./user/user.reducer";
import modalReducer from "./modal/modal.reducer";
import queueReducer from "./queue/queue.reducer";
import loginReducer from "./login/login.reducer";
import environmentReducer from "./environment/environment.reducer";
import supervisiongroupReducer from "./supervisiongroup/supervisiongroup.reducer";
import servicegroupReducer from "./servicegroup/servicegroup.reducer";
import queuepermissionReducer from "./queuepermission/queuepermission.reducer";
import agentReducer from "./agent/agent.reducer";

const rootReducer = combineReducers({ userReducer, modalReducer, loginReducer, environmentReducer, supervisiongroupReducer, servicegroupReducer, queueReducer, queuepermissionReducer, agentReducer });

export default rootReducer;
