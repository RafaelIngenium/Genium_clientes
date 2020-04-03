import ClienteDetailsActionTypes from "./clientdetails.types";

export default function clientdetails(state = [], action) {
    switch (action.type) {
      case ClienteDetailsActionTypes.ADD_INFO_CLIENT:
        var todos = action.todos
            todos = {...todos, lastcontacts: [], lastcontact: "", messages: []}
        return todos
      case ClienteDetailsActionTypes.ADD_LAST_CONTACT:
        return {...state, lastcontact: action.todos}
      case ClienteDetailsActionTypes.ADD_LAST_CONTACTS:
        return {...state, lastcontacts: action.todos}
      case ClienteDetailsActionTypes.CREATE_MESSAGES:
        return {...state, messages: action.todos}
      default:
        return state;
    }
  }
  