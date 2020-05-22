import UploadFileActionTypes from "./uploadfile.types";

export default function quickanswer (state = [], action){
  switch (action.type) {
    case UploadFileActionTypes.UPLOADPROGRESS:
      return action.todos
    default:
      return state
  }
}