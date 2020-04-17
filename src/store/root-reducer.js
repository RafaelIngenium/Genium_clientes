import { combineReducers } from "redux";
//Reducers
import userReducer from "./user/user.reducer";
import modalReducer from "./modal/modal.reducer";
import queueReducer from "./queue/queue.reducer";
import environmentReducer from "./environment/environment.reducer";
import supervisiongroupReducer from "./supervisiongroup/supervisiongroup.reducer";
import servicegroupReducer from "./servicegroup/servicegroup.reducer";
import queuepermissionReducer from "./queuepermission/queuepermission.reducer";
import agentReducer from "./agent/agent.reducer";
import topfiveflowReducer from "./topfiveflow/topfiveflow.reducer"
import clientdetailsReducer from "./clientdetails/clientdetails.reducer"
import quickanswerReducer from "./quickanswer/quickanswer.reducer"

const rootReducer = combineReducers({ userReducer, modalReducer, environmentReducer, supervisiongroupReducer, servicegroupReducer, queueReducer, queuepermissionReducer, agentReducer, topfiveflowReducer, clientdetailsReducer, quickanswerReducer });

export default rootReducer;
