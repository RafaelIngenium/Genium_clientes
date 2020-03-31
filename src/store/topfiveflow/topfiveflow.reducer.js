import TopFiveFlowActionTypes from "./topfiveflow.types";

export default function topfiveflow(state = [], action) {
    switch (action.type) {
      case TopFiveFlowActionTypes.ADD_INFO_TOP_FIVE_FLOW:
        return action.topfiveflow;
      default:
        return state;
    }
  }
  