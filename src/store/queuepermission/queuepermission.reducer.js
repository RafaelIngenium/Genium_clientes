import QueuePermissionActionTypes from "./queuepermission.types";

export default function queuepermission(state = [], action) {
    switch (action.type) {
      case QueuePermissionActionTypes.ADD_INFO_QUEUE_PERMISSION:
        return action.queuepermission;
      default:
        return state;
    }
  }
  