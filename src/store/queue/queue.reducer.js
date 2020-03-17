import QueueActionTypes from "./queue.types";

export default function user(state = [], action) {
    switch (action.type) {
      case QueueActionTypes.ADD_INFO_QUEUE:
        return action.queue;
      default:
        return state;
    }
  }
  