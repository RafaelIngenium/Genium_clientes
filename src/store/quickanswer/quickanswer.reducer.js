import QuickAnswerActionTypes from "./quickanswer.types";

export default function quickanswer (state = [], action){
  switch (action.type) {
    case QuickAnswerActionTypes.ADD_QUICK_ANSWER:
      return action.todos
    default:
      return state
  }
}