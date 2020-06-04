import Moment from 'moment'
import ClienteDetailsActionTypes from "./clientdetails.types";

export default function clientdetails(state = [], action) {
    switch (action.type) {
      case ClienteDetailsActionTypes.ADD_INFO_CLIENT:
        var todos = action.todos
            todos = {...todos, lastcontacts: [], lastcontact: "", messages: [], answer: false}
        return todos
      case ClienteDetailsActionTypes.ADD_LAST_CONTACT:
        return {...state, lastcontact: action.todos}
      case ClienteDetailsActionTypes.ADD_LAST_CONTACTS:
        return {...state, lastcontacts: action.todos}
      case ClienteDetailsActionTypes.CREATE_MESSAGES:
        return {...state, messages: action.todos}
      case ClienteDetailsActionTypes.ACCEPT_ANWSER:
        return {...state, answer: action.todos}
      case ClienteDetailsActionTypes.CHANGE_STATUS_QUEUE:
        return {...state, status: action.todos}
      case ClienteDetailsActionTypes.ADD_MESSAGES:
        var array = state.messages
        array.push({agente: action.agente,
                            anoenvio: "",
                            caption: action.caption,
                            cliente: "",
                            data_hora_envio: action.data,
                            diaenvio: "",
                            favorite: false,
                            filesize: action.filesize,
                            horaenvio: action.hora,
                            id: '',
                            idmidia: action.mediaid,
                            mesenvio: "",
                            messagem: action.messagem,
                            midia: "WhatsApp",
                            mimetypeid: action.mimetypeid,
                            mon_type_id: 0,
                            thumbnail: null,
                            username: action.username})
        return {...state, messages: array}
      default:
        return state;
    }
  }
  