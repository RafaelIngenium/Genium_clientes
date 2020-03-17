import SupervisionGroupActionTypes from "./supervisiongroup.types";

export default function supervisiongroupReducer(state = [], action) {
    switch (action.type) {
      case SupervisionGroupActionTypes.ADD_SUPERVISION_GROUP:
        return action.post
      default:
        return state;
    }
  }
  